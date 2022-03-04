from lsqt import BaseCtaStrategy, CtaContext, log_info
import numpy as np


class MyStrategy(BaseCtaStrategy):

    def __init__(self, name: str = 'pydt_D'):
        BaseCtaStrategy.__init__(self, name)

        self.days = 5
        self.k1 = 0.1
        self.k2 = 0.1
        self.bar_cnt = 10

        # self.__codes__ = ["DCE.m.1903"]
        # self.__codes__ = ["DCE.m.HOT"]
        self.__codes__ = ["SHFE.ag.HOT"]

    def on_init(self, context: CtaContext):
        code = self.__codes__[0]  # 品种代码
        if self.__is_stk__:
            code = code + "Q"

        # 这里演示了品种信息获取的接口
        #pInfo = context.stra_get_comminfo(code)
        # print(pInfo)

        context.stra_get_bars(
            code,
            self.__period__,
            self.bar_cnt,
            isMain=True)
        log_info("初始化订阅行情")

    def on_bar(
            self,
            context: CtaContext,
            stdCode: str,
            period: str,
            newBar: dict):
        log_info(f"newBar:{newBar}")
        code = self.__codes__[0]  # 品种代码

        trdUnit = 1
        if self.__is_stk__:
            trdUnit = 100

        # 读取最近50条1分钟线(dataframe对象)
        theCode = code
        if self.__is_stk__:
            theCode = theCode + "Q"
        df_bars = context.stra_get_bars(
            theCode, self.__period__, self.bar_cnt, isMain=True)

        # 把策略参数读进来，作为临时变量，方便引用
        days = self.days
        k1 = self.k1
        k2 = self.k2

        # 平仓价序列、最高价序列、最低价序列
        closes = df_bars.closes
        highs = df_bars.highs
        lows = df_bars.lows

        # 读取days天之前到上一个交易日位置的数据
        hh = np.amax(highs[-days:-1])
        hc = np.amax(closes[-days:-1])
        ll = np.amin(lows[-days:-1])
        lc = np.amin(closes[-days:-1])

        # 读取今天的开盘价、最高价和最低价
        # lastBar = df_bars.get_last_bar()
        openpx = df_bars.opens[-1]
        highpx = df_bars.highs[-1]
        lowpx = df_bars.lows[-1]

        '''
        !!!!!这里是重点
        1、首先根据最后一条K线的时间，计算当前的日期
        2、根据当前的日期，对日线进行切片,并截取所需条数
        3、最后在最终切片内计算所需数据
        '''

        # 确定上轨和下轨
        upper_bound = openpx + k1 * max(hh - lc, hc - ll)
        lower_bound = openpx - k2 * max(hh - lc, hc - ll)

        # 读取当前仓位
        curPos = context.stra_get_position(code) / trdUnit

        if curPos == 0:
            if highpx >= upper_bound:
                context.stra_enter_long(
                    stdCode=code, qty=1 * trdUnit, usertag='enterlong',insert_mongo=False)
                log_info("向上突破%.2f>=%.2f，多仓进场" % (highpx, upper_bound))
                return

            if lowpx <= lower_bound and not self.__is_stk__:
                context.stra_enter_short(
                    stdCode=code, qty=1 * trdUnit, usertag='entershort',insert_mongo=False)
                log_info(
                    "向下突破%.2f<=%.2f，空仓进场" %
                    (lowpx, lower_bound))
                return
        elif curPos > 0:
            if lowpx <= lower_bound:
                context.stra_exit_long(
                    stdCode=code, qty=1 * trdUnit, usertag='exitlong',insert_mongo=False)
                log_info("向下突破%.2f<=%.2f，多仓出场" % (lowpx, lower_bound))
                return
        else:
            if highpx >= upper_bound and not self.__is_stk__:
                context.stra_exit_short(
                    stdCode=code, qty=1 * trdUnit, usertag='exitshort',insert_mongo=False)
                log_info("向上突破%.2f>=%.2f，空仓出场" % (highpx, upper_bound))
                return

    def on_tick(self, context: CtaContext, stdCode: str, newTick: dict):
        #context.stra_log_text ("on tick fired")
        # print(newTick)
        return
