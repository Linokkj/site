document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantityInput');
    const minusBtn = document.getElementById('minus-btn');
    const plusBtn = document.getElementById('plus-btn');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const sizeButtons = document.querySelectorAll('.btn-outline-dark');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    let currentQuantity = parseInt(quantityInput.value);

    // 1. Controle de Quantidade
    minusBtn.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityInput.value = currentQuantity;
        }
    });

    plusBtn.addEventListener('click', () => {
        currentQuantity++;
        quantityInput.value = currentQuantity;
    });

    // 2. Seleção de Tamanho
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a seleção de todos
            sizeButtons.forEach(btn => btn.classList.remove('selected-option'));
            // Adiciona a seleção ao clicado
            button.classList.add('selected-option');
        });
    });

    // 3. Seleção de Cor
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Remove a seleção de todos
            colorSwatches.forEach(s => s.classList.remove('active'));
            // Adiciona a seleção ao clicado
            swatch.classList.add('active');
            
            const selectedColor = swatch.getAttribute('data-color');
            console.log(`Cor selecionada: ${selectedColor}`);
            // Aqui você faria uma chamada para mudar a imagem principal se houvesse várias imagens
        });
    });


    // 4. Adicionar ao Carrinho (Simulação)
    addToCartBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('.btn-outline-dark.selected-option')?.textContent || 'Não Selecionado';
        const selectedColorElement = document.querySelector('.color-swatch.active');
        const selectedColor = selectedColorElement ? selectedColorElement.getAttribute('data-color') : 'Não Selecionada';
        
        alert(`O Seu Produto foi Adicionado ao Carrinho!
        
        Produto: Livro
        Quantidade: ${currentQuantity}`);
    });
});