import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Product.module.scss";

export default function Product({ data, src, title, id }) {
  const isNew = data.nouveau;
  const stock = data.stock;
  const productTypes = data.type_de_produit;

  const setTag = () => {
    if (!productTypes.length) {
      return "Indisponible";
    }
    if (
      productTypes.find(({ promotion }) => promotion && promotion.actif == true)
    ) {
      return "Promotion";
    }
    if (isNew) {
      return "Nouveau";
    }
    if (stock < 2) {
      return "Peu de stock";
    }
    return "";
  };

  const setPrice = () => {
    if (!productTypes.length) {
      return { value: 0 };
    }
    let minPrice = Number.MAX_VALUE;
    let selectedProduct = null;

    productTypes.forEach((element) => {
      if (minPrice > element.prix) {
        minPrice = element.prix;
        selectedProduct = element;
      }
    });

    if (selectedProduct.promotion && selectedProduct.promotion.actif) {
      return {
        value: selectedProduct.prix,
        promotion: selectedProduct.promotion.prix,
      };
    }

    return {
      value: selectedProduct.prix,
    };
  };

  const tag = setTag();
  const priceObject = setPrice();

  //TODO change url
  return (
    <Link href={`/boutique/${id}`} passHref>
      <div className={styles.productContainer}>
        {tag !== "" && <h4>{tag}</h4>}
        <Image
          src={src}
          loader={() => src}
          width={"170%"}
          height={"250%"}
          objectFit={"cover"}
          alt={title}
        />
        <p className={styles.titleText}>{title}</p>
        <p className={styles.priceDetailsText}>
          {productTypes.length > 1 ? "à partir de" : "au prix de"}
        </p>
        {priceObject.promotion ? (
          <div className={styles.promotionContainer}>
            <p className={styles.priceTextPromotion}>
              {priceObject.promotion} €
            </p>
            <p className={styles.priceTextOutdated}>{priceObject.value} €</p>
          </div>
        ) : (
          <p className={styles.priceText}>{priceObject.value} €</p>
        )}
      </div>
    </Link>
  );
}
