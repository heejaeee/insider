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
CloseOrderCommission = TakerFee * SizeBTC