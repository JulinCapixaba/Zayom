// ===== FUNCIONALIDADES INTERATIVAS ZAYON =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== FILTROS DE PRODUTOS =====
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const produtoItems = document.querySelectorAll('.produto-item');
    
    if (categoriaBtns.length > 0) {
        categoriaBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const categoria = this.getAttribute('data-categoria');
                
                // Remove classe ativo de todos os botões
                categoriaBtns.forEach(b => b.classList.remove('ativo'));
                // Adiciona classe ativo ao botão clicado
                this.classList.add('ativo');
                
                // Filtra os produtos
                produtoItems.forEach(item => {
                    if (categoria === 'todos' || item.getAttribute('data-categoria') === categoria) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s ease-in';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // ===== FAQ EXPANSÍVEL =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        
        if (pergunta) {
            pergunta.addEventListener('click', function() {
                const isAtivo = item.classList.contains('ativo');
                
                // Fecha todos os outros itens
                faqItems.forEach(faq => faq.classList.remove('ativo'));
                
                // Abre o item clicado se não estava ativo
                if (!isAtivo) {
                    item.classList.add('ativo');
                }
            });
        }
    });
    
    
    // ===== ANIMAÇÕES DE SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const elementosAnimados = document.querySelectorAll('.produto-item, .valor-item');
    elementosAnimados.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===== MENU MOBILE RESPONSIVO =====
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('ativo');
            this.classList.toggle('ativo');
            
            // Previne scroll do body quando menu está aberto
            if (menu.classList.contains('ativo')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Fecha menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('ativo');
                menuToggle.classList.remove('ativo');
                document.body.style.overflow = '';
            });
        });
        
        // Fecha menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menu.classList.remove('ativo');
                menuToggle.classList.remove('ativo');
                document.body.style.overflow = '';
            }
        });
        
        // Fecha menu ao redimensionar a tela
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menu.classList.remove('ativo');
                menuToggle.classList.remove('ativo');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===== SCROLL SUAVE PARA LINKS INTERNOS =====
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    
    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== BOTÃO VOLTAR AO TOPO =====
    const botaoTopo = document.createElement('button');
    botaoTopo.innerHTML = '<i class="fas fa-arrow-up"></i>';
    botaoTopo.className = 'botao-topo';
    botaoTopo.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #e63946;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);
    `;
    
    document.body.appendChild(botaoTopo);
    
    // Mostra/esconde botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            botaoTopo.style.opacity = '1';
            botaoTopo.style.visibility = 'visible';
        } else {
            botaoTopo.style.opacity = '0';
            botaoTopo.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidade do botão
    botaoTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('🚀 ZAYON Streetwear - Site carregado com sucesso!');
});