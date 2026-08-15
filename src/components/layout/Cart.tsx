export function Cart(){
    return (
        <section className="bg-rose-50 p-4 rounded-lg">
            <h2 className="text-red-500 text-2xl font-bold mb-8">Your Cart (0)</h2>
            <img className="m-auto" src="./assets/images/illustration-empty-cart.svg" alt="Image of a sliced cake, signaling your cart is emptty" />
            <p className="text-center text-rose-500 font-medium my-4">Your added items will appear here </p>
        </section>
    )
}