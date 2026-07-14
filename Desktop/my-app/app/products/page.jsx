import styles from './products.module.css';

export default async function UsersPage() {
    const response = await fetch('https://fakestoreapi.com/products?limit=6');
    
    if (!response.ok) {
        throw new Error('Не удалось загрузить данные');
    }

    const products = await response.json();

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Наши товары</h1>

            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className={styles.image}
                        />

                        <h3 className={styles.name}>{product.title}</h3>

                        <span className={styles.category}>{product.category}</span>

                        <p className={styles.price}>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}