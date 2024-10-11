/**
 * @fileoverview Este arquivo contém funções para carregar e exibir a lista de comunidades.
 * @author Fabio
 * @version 1.2.0
 */

/**
 * Carrega os dados das comunidades e preenche a página com cards para cada comunidade.
 * @function
 * @async
 */
async function carregarComunidades() {
    try {
        // Carrega o arquivo JSON com os dados das comunidades
        const response = await fetch('../data/comunidades.json');
        const comunidades = await response.json();

        const comunidadesContainer = document.getElementById('comunidades-container');

        // Itera sobre cada comunidade no objeto JSON
        for (const [id, comunidade] of Object.entries(comunidades)) {
            const comunidadeElement = document.createElement('div');
            comunidadeElement.classList.add('col-md-4', 'mb-4');
            comunidadeElement.innerHTML = `
                <div class="card h-100">
                    <div class="card-img-top-wrapper" style="height: 200px; overflow: hidden;">
                        <img src="${comunidade.imagem}" class="card-img-top" alt="${comunidade.nome}" style="object-fit: cover; height: 100%; width: 100%;">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${comunidade.nome}</h5>
                        <p class="card-text">${comunidade.localizacao}</p>
                        <p class="card-text">
                            <small class="text-muted fs-6">
                                <i class="fas fa-user me-2"></i>${comunidade.numDoadores} Doadores
                                <i class="fas fa-gift ms-3 me-2"></i>${comunidade.numDoacoes} Doações
                            </small>
                        </p>
                        <a href="perfil_comunidade.html?id=${id}" class="btn btn-primary mt-auto">Ver mais</a>
                    </div>
                </div>
            `;
            comunidadesContainer.appendChild(comunidadeElement);
        }
    } catch (error) {
        console.error('Erro ao carregar dados das comunidades:', error);
        alert('Ocorreu um erro ao carregar os dados das comunidades. Por favor, tente novamente mais tarde.');
    }
}

// Carrega as comunidades quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarComunidades);