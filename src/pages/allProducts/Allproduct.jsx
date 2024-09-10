import Filter from "../../components/filter/Filter"
import Layout from "../../components/layout/Layout"
import ProductCard from "../../components/productCard/ProductCard"


const Allproduct = () => {
  return (
    <Layout>
    <div>
      <Filter/>
      <ProductCard/>
    </div>
    </Layout>
  )
}

export default Allproduct
