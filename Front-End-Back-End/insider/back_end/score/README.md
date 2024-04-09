# score

PnL open position
PnL = Realized PnL + Unrealized PnL, where:
Realized PnL = - OpenOrderCommission - Funding
Unrealized PnL (Long) = SizeUSD * Multiplier * (BidPrice - OpenPrice)/OpenPrice
Unrealized PnL (Short) = SizeUSD * Multiplier * (OpenPrice - AskPrice)/OpenPrice

PnL closed position
PnL = Realized PnL + Unrealized PnL - CloseOrderCommission , where:
Unrealized PnL (Long) = SizeUSD * Multiplier * (ClosePrice- OpenPrice)/OpenPrice
Unrealized PnL (Short) = SizeUSD * Multiplier * (OpenPrice - ClosePrice)/OpenPrice
CloseOrderCommission = TakerFee * Size

PnL = (Exit Price x Amount Sold) - (Entry Price x Amount Bought) - Fees

profit percentage
(Total amount(capital + PnL) - capital) / Total amount * 100
ex. (1500 - 1000) / 1000 * 100 = 50%

Rate
PnL amount 3 : 7 Profit percentage 

Month(User set)
((3 * PnL amount) + (7 * Profit percentage))

Score
// To be determined
