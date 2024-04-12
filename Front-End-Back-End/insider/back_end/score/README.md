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

Today’s PNL = Current Spot Wallet balance - Initial Spot Wallet balance of the day - Net total of transfer and deposit of the day
Cumulative PNL = Cumulative PNL / (Initial Spot Wallet balance on Day 1 + Daily cumulative average net transfer and deposit from Day 1 to Day N)
Asset Allocation ranks your Spot Wallet assets by volume, calculated based on the latest market price
Daily PNL = Daily end-of-day Spot Wallet asset balance - Daily Spot Wallet asset balance at 00:00 - Net total of transfer and deposit of the day
Asset Net Worth shows the total net value of all Spot Wallet assets from Day 1 to Day N

PnL = (Exit Price x Amount Sold) - (Entry Price x Amount Bought) - Fees
= End position(at the time closed position) - Begining assets - Net inflow

profit percentage
(Total amount(capital + PnL) - capital) / Total amount * 100
ex. (1500 - 1000) / 1000 * 100 = 50%

Rate
PnL amount 3 : 7 Profit percentage 

Month(User set)
((3 * PnL amount) + (7 * Profit percentage))

Score
Score will be determined with above calculations
// To be determined
