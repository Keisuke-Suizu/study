import pandas

DATETIME=0
ASK_OPEN=1
ASK_HIGH=2
ASK_LOW=3
ASK_CLOSE=4
MID_OPEN=5
MID_HIGH=6
MID_LOW=7
MID_CLOSE=8
BID_OPEN=9
BID_HIGH=10
BID_LOW=11
BID_CLOSE=12
i = 1
j = 1
REPEAT = 600
REPEAT1 = REPEAT
REPEAT2= 0
sumMoney = 0
#sumBid = 0
#sumShort = 0
sumBitCoin = 0
sumExpense = 0
sumMoneyAll = 0

#DEFAULT = 0
#LONG = 1
#SHORT = 2
#positon = DEFAULT

bitCoinUnit = 1

#dataFile =pandas.read_csv("all.csv", header=None, usecols=[DATETIME,MID_HIGH])
#dataFile =pandas.read_csv("all.csv", header=None)
dataFile =pandas.read_csv("fx_ask_bid_candle_tb20200802.csv", header=None)

listDATETIME = dataFile[DATETIME]
listASK_OPEN = dataFile[ASK_OPEN]
listASK_HIGH = dataFile[ASK_HIGH]
listASK_LOW = dataFile[ASK_LOW]
listASK_CLOSE = dataFile[ASK_CLOSE]
listMID_OPEN = dataFile[MID_OPEN]
listMID_HIGH = dataFile[MID_HIGH]
listMID_LOW = dataFile[MID_LOW]
listMID_CLOSE = dataFile[MID_CLOSE]
listBID_OPEN = dataFile[BID_OPEN]
listBID_HIGH = dataFile[BID_HIGH]
listBID_LOW = dataFile[BID_LOW]
listBID_CLOSE = dataFile[BID_CLOSE]

REPEAT2 = len(dataFile) / REPEAT - 1

#print(df_DATETIME)
#print(listMID_HIGH[0])
#print(listMID_HIGH[1])

while j <= REPEAT2:
    sumMoney = 0
    sumExpense = 0
    while i <=REPEAT:
        if listMID_LOW[i] < listMID_LOW[i-1]:
            #print("i = ", i, ", 買います")
            if sumBitCoin == 0:
                sumMoney = sumMoney - listBID_HIGH[i+1] * bitCoinUnit
                sumExpense = listBID_HIGH[i+1] * abs(bitCoinUnit)
                sumBitCoin = sumBitCoin + bitCoinUnit
            elif sumBitCoin < 0 :
                sumMoney = sumMoney + listBID_HIGH[i+1] * sumBitCoin
                sumBitCoin = 0
        else:
            #print("i = ", i, ", 売ります")
            if sumBitCoin > 0:
                sumMoney = sumMoney + listASK_LOW[i+1] * sumBitCoin
                sumBitCoin = 0
            #else:
                #sumMoney = sumMoney + listASK_LOW[i+1] * bitCoinUnit
                #sumExpense = listASK_LOW[i+1] * abs(bitCoinUnit)
                #sumBitCoin = sumBitCoin - bitCoinUnit
        #print("i = ",i,", sumBitCoin = ", sumBitCoin, ", sumMoney = ", sumMoney)
        i=i+1
    REPEAT = REPEAT + REPEAT1
    
    if sumBitCoin > 0:
        sumMoney = sumMoney + listASK_LOW[REPEAT + 1] * sumBitCoin
        sumBitCoin = 0
    elif sumBitCoin < 0:
        sumMoney = sumMoney + listBID_HIGH[REPEAT+1] * sumBitCoin
        sumBitCoin = 0
    
    print("j =", j,", 金額 =",sumMoney, ", 利回り =", round(sumMoney/sumExpense * 100,1), "%")
    sumMoneyAll = sumMoneyAll + sumMoney
    j = j + 1

print("最終金額 =", sumMoneyAll)
