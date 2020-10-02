import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
    </div>

    <Prices bpi={props.bpi} />
  </Layout>
)

Index.getInitialProps = async () => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await response.json()

  return {
    bpi: data.bpi
  }
}

export default Index
