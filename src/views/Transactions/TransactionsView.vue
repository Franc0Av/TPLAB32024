<template>
    <div class="transactions-box">
        <section class="sale-box">
            <h2>Nueva Compra</h2>
            <div class="input-box">
                <input type="text" required>
                <input type="number" required>
                <input type="text" required>
                <button>Comprar</button>
            </div>
        </section>
        <section>
            <h2>
                Nueva Venta
            </h2>
            <div class="input-box">
                <input type="text" required>
                <input type="number" required>
                <input type="number" required>
                <button>Vender</button>
            </div>
        </section>
    </div>
</template>

<style>
.transactions-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
/* .sale-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
} */
.input-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    gap: 1em;
}
input{
    width: 10%;
}
</style>

