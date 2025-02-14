import { translate, useAuthContext, NoPropsFCT } from "store/index"

import Header from "components/header"
import TransactionList from "components/transactions/list"
import { gql } from "@apollo/client"

gql`
  query btcPriceList($range: PriceGraphRange!) {
    btcPriceList(range: $range) {
      timestamp
      price {
        base
        offset
        currencyUnit
      }
    }
  }
`

const Home: NoPropsFCT = () => {
  const { isAuthenticated } = useAuthContext()

  return (
    <>
      <div className="home">
        <Header page="home" />

        <div className="recent-transactions">
          {isAuthenticated && (
            <>
              <div className="header">{translate("Recent Transactions")}</div>
              <TransactionList />
            </>
          )}
        </div>
      </div>

      <div id="powered-by">
        <div className="content">
          {translate("Powered By")}{" "}
          <a href="https://getflash.io/" target="_blank" rel="noreferrer">
            Flash
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
