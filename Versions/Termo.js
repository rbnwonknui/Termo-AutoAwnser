function showSolutionNotification(solution) {
    const existingNotification = document.querySelector('.solution-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    const notification = document.createElement('div');
    notification.className = 'solution-notification';
    notification.innerHTML = `
        <style>
            .solution-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #538D4E;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                font-family: 'Mitr', sans-serif;
                font-size: 18px;
                font-weight: bold;
                z-index: 10001;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease-out;
                max-width: 300px;
                text-align: center;
            }
            .solution-notification .solution-text {
                margin: 0;
            }
            .solution-notification .close-btn {
                position: absolute;
                top: 5px;
                right: 10px;
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                font-weight: bold;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        </style>
        <button class="close-btn">&times;</button>
        <div class="solution-text">Solução: ${solution.toUpperCase()}</div>
    `;
    document.body.appendChild(notification);
    const closeBtn = notification.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 10000);
    return notification;
}

function showModal(solution = null) {
    const existingModal = document.querySelector('wc-modal');
    if (existingModal) {
        existingModal.remove();
    }
    const modal = document.createElement('wc-modal');
    modal.style.display = 'block';
    modal.innerHTML = `
        <template shadowrootmode="open">
            <style type="text/css">
                :host {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10000;
                    color: white;
                    color: #BBB;
                    font-family: 'Mitr', sans-serif;
                    font-weight: 300;
                }
                :host([style*="block"]) {
                    display: flex !important;
                }
                #all {
                    width: 100%;
                    box-sizing: border-box;
                    height: 100%;
                    background-color: rgba(70, 70, 70, 0.5);
                    display: flex;
                    flex-direction: column;
                    font-size: 3rem;
                    line-height: 1.35em;
                    font-weight: 300;
                    justify-content: center;
                    align-items: center;
                    padding: 6vh 2em 2em 2em;
                }
                #box {
                    max-width: 720px;
                    padding: 1.5em;
                    margin: 0;
                    width: 100%;
                    background-color: #312B2D;
                    box-sizing: border-box;
                    border-radius: 0.5em;
                    overflow: auto;
                    z-index: 19000;
                    pointer-events: auto;
                    line-height: 1.5em;
                }
                .letter place {
                    display: inline-block;
                    width: 1.2em;
                    height: 1.2em;
                    line-height: 1.2em;
                    text-align: center;
                    margin: 0.1em;
                    background-color: #538D4E;
                    color: white;
                    font-weight: bold;
                    border-radius: 0.1em;
                }
                .example {
                    margin: 1em 0;
                    text-align: center;
                }
                p {
                    font-size: 0.5em;
                    margin: 1em 0;
                }
                #closeBtn {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    color: #BBB;
                    font-size: 1.5em;
                    cursor: pointer;
                    z-index: 20000;
                }
                #closeBtn:hover {
                    color: white;
                }
                .solution {
                    background-color: #538D4E;
                    padding: 0.5em;
                    border-radius: 0.25em;
                    margin: 1em 0;
                    text-align: center;
                    font-weight: bold;
                    font-size: 0.6em;
                }
                .loading {
                    color: #FFA500;
                    font-style: italic;
                }
            </style>
            <div id="all">
                <div id="box">
                    <button id="closeBtn">&times;</button>
                    <slot></slot>
                </div>
            </div>
        </template>
        <div tabindex="0" id="help">
            <p tabindex="0" class="help_multi">Descubra as palavras certas. Depois de cada tentativa, as peças mostram o quão perto você está da solução.</p>
            <p tabindex="0" class="help_termo">Bem Vindo Ao Termo-AutoAnswer! Esse Script te dará a resposta correta do jogo termo diariamente 100% atualizado e 99% automático, tenha um histórico de vitórias perfeito com essa automação</p>
            <div class="example">
                <span tabindex="0" role="text" aria-label="letra H correta" class="letter place">H</span>
                <span tabindex="0" role="text" aria-label="letra E" class="letter place">E</span>
                <span tabindex="0" role="text" aria-label="letra L" class="letter place">L</span>
                <span tabindex="0" role="text" aria-label="letra P" class="letter place">P</span>
            </div>
            <p tabindex="0">Infelizmente o Script ainda não funciona de forma 100% automática então você terá que digitar uma palavra manualmente, após isso o script funcionará normalmente. Recomendo usar a palavra abaixo faz parte da palavra e está na posição correta.</p>
            <div class="example">
                <span tabindex="0" role="text" aria-label="letra P" class="letter right">P</span>
                <span tabindex="0" role="text" aria-label="letra I" class="letter right">I</span>
                <span tabindex="0" role="text" aria-label="letra N" class="letter right">N</span>
                <span tabindex="0" role="text" aria-label="letra T" class="letter right">T</span>
                <span tabindex="0" role="text" aria-label="letra O" class="letter right">O</span>
            </div>
            <p tabindex="0">Obrigado por usar o meu script foi feito com muito carinho ❤️</p>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => {
        const closeBtn = modal.shadowRoot?.querySelector('#closeBtn');
        const backdrop = modal.shadowRoot?.querySelector('#all');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });
        }
        if (backdrop) {
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) {
                    modal.remove();
                }
            });
        }
    }, 100);
    return modal;
}

function updateModalWithSolution(modal, solution) {
    if (modal && modal.shadowRoot) {
        const solutionElement = modal.shadowRoot.querySelector('.solution');
        if (solutionElement) {
            solutionElement.innerHTML = `Solução de hoje: ${solution.toUpperCase()}`;
            solutionElement.classList.remove('loading');
        }
    }
}

function checkForTermo(modal) {
    const termo = localStorage.getItem('termo');
    if (termo) {
        try {
            const termoData = JSON.parse(termo);
            if (termoData.state && termoData.state[0] && termoData.state[0].solution) {
                const solution = termoData.state[0].solution;
                updateModalWithSolution(modal, solution);
                showSolutionNotification(solution);
                return true;
            }
        } catch (e) {}
    }
    return false;
}

function startTermoChecker(modal) {
    if (checkForTermo(modal)) {
        return;
    }
    const checkInterval = setInterval(() => {
        if (checkForTermo(modal)) {
            clearInterval(checkInterval);
        }
    }, 1000);
    setTimeout(() => {
        clearInterval(checkInterval);
    }, 30000);
}

const modal = showModal();
startTermoChecker(modal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('wc-modal');
        if (modal) {
            modal.remove();
        }
        const notification = document.querySelector('.solution-notification');
        if (notification) {
            notification.remove();
        }
    }
});
