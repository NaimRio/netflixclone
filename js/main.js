var urltemp = "http://www.youtube.com/";

function mudapri(valor){

    var titulo = document.getElementById("fpt");
    var descricao = document.getElementById("fpd");
    var filmefundo = document.getElementById("fp");
    var btplay = document.getElementById("btplay");
    var btinfo = document.getElementById("btinfo");

    switch (valor) {
        case 0 : {
            titulo.innerHTML = "ALITA: O ANJO DE BATALHA";
            descricao.innerHTML = "Abandonada em um ferro-velho de Iron City, a ciborgue Alita é encontrada pelo cientista Dyson Ido. Revitalizada, ela acorda sem memória e reconhecimento do mundo em que se encontra. Determinada a conhecer seu passado e explorar suas habilidades surpreendentes de luta, Alita se torna uma poderosa caçadora de recompensas, combatendo forças mortais."
            filmefundo.style.backgroundImage = "url('img/destaque/AlitaBaner.jpg')";
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/UgrCecj-XNU?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/399579-alita-battle-angel?language=pt-BR")};
            break;
        }
        case 1 : {
            titulo.innerHTML = "O LEGADO DE JUPTER";
            descricao.innerHTML = "A primeira geração desses super-heróis manteve o mundo seguro por quase um século. Mas será que seus filhos vão conseguir carregar esse legado?"
            filmefundo.style.backgroundImage = "url('img/destaque/Legado_de_Jupter.jpg')";
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/78QltZcT7Ws?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/tv/93484-jupiter-s-legacy?language=pt-BR")};
            break;
        }
        case 2 : {
            titulo.innerHTML = "MONSTER HUNTER";
            descricao.innerHTML = "Baseado no jogo da Capcom chamado Monster Hunter, a tenente Artemis e seus soldados são transportados para um novo mundo. Lá, eles se envolvem em batalhas imponentes, buscando desesperadamente a sobrevivência contra bestas gigantes portadoras de habilidades surreais."
            filmefundo.style.backgroundImage = "url('img/destaque/MH.jpg')";            
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/8UUcif71zg4?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/458576-monster-hunter?language=pt-BR")};
            break;
        }
        case 3 : {
            titulo.innerHTML = "O CONTO DA AIA";
            descricao.innerHTML = "Gilead tem um regime que trata mulheres como propriedade. Offred é uma das poucas mulheres férteis e serva do Comandante, buscando sobreviver e encontrar a filha que foi tirada dela."
            filmefundo.style.backgroundImage = "url('img/destaque/aia.jpg')";            
            btplay.onclick = function(){window.open("https://www.youtube.com/embed/VvRQHaAe9MA?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/tv/69478-the-handmaid-s-tale?language=pt-BR")};
            break;
        }
        case 4 : {
            titulo.innerHTML = "A SETINELA";
            descricao.innerHTML = "Transferida para casa depois de uma missão traumatizante, uma soldado francesa usa suas habilidades letais para caçar o homem que feriu sua irmã."
            filmefundo.style.backgroundImage = "url('img/destaque/sentinela.jpg')";            
            btplay.onclick = function(){window.open("https://www.youtube.com/embed/wAJcykyq7DU?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/793723-sentinelle?language=pt-BR")};
            break;
        }
        case 5 : {
            titulo.innerHTML = "AVA";
            descricao.innerHTML = "Atormentada por dúvidas, uma assassina de elite luta para proteger a si mesma e a sua família depois que uma missão dá errado."
            filmefundo.style.backgroundImage = "url('img/destaque/ava.jpg')";            
            btplay.onclick = function(){window.open("https://www.youtube.com/embed/Mot5ovqTPXo?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/539885-ava?language=pt-BR")};
            break;
        }
        case 6 : {
            titulo.innerHTML = "TOM & JERRY: O FILME";
            descricao.innerHTML = "Um gato de rua chamado Tom é contratado por uma garota chamada Kayla, uma jovem empregada que trabalha em um hotel glamouroso em Nova York, para se livrar de Jerry, um rato travesso que se mudou para o hotel, antes que ele seja a ruína de um importante casamento."
            filmefundo.style.backgroundImage = "url('img/destaque/tej.jpg')";            
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/Jg-ls07nixc?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/587807-tom-jerry?language=pt-BR")};
            break;
        }
        case 7 : {
            titulo.innerHTML = "VANQUISH";
            descricao.innerHTML = "Uma mãe, Victoria, está tentando deixar seu passado sombrio como uma entregadora de drogas russa para trás, mas o policial aposentado Damon força Victoria a cumprir suas ordens, mantendo sua filha como refém."
            filmefundo.style.backgroundImage = "url('img/destaque/vanquish.jpg')";            
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/MQoz4EIWSZc?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/804435-vanquish?language=pt-BR")};
            break;
        }
        case 8 : {
            titulo.innerHTML = "NOVA ORDEM ESPACIAL";
            descricao.innerHTML = "Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide."
            filmefundo.style.backgroundImage = "url('img/destaque/novaordemespacial.jpg')"; 
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/v6jmKLAW928?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/581389?language=pt-BR")};
            break;
        }
        case 9: {
            titulo.innerHTML = "GOOD DOCTOR";
            descricao.innerHTML = "Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade a seus colegas e superiores."
            filmefundo.style.backgroundImage = "url('img/destaque/gooddoctor.jpg')";           
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/tUeo0RZN9kM?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/tv/71712-the-good-doctor?language=pt-BR")};
            break;
        }
        case 10 : {
            titulo.innerHTML = "CHERRY INOCÊNCIA PERDIDA";
            descricao.innerHTML = "Cherry deixa a faculdade para se tornar médico no Iraque, apoiado por sua amada, Emily. Ao voltar da guerra com estresse pós-traumático, se envolve com crime e drogas enquanto luta para reconquistar seu lugar no mundo."
            filmefundo.style.backgroundImage = "url('img/destaque/cherry.jpg')";
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/a0cpy6pN718?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/544401-cherry?language=pt-BR")};
            break;
        }
        case 11 : {
            titulo.innerHTML = "PONTO VERMELHO";
            descricao.innerHTML = "Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos."
            filmefundo.style.backgroundImage = "url('img/destaque/pontovermelho.jpg')";            
            btplay.onclick = function(){window.open("https://www.youtube.com/embed/t7FwypV69qc?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/649087-red-dot?language=pt-BR")};
            break;
        }
        case 12 : {
            titulo.innerHTML = "THE FLASH";
            descricao.innerHTML = "Barry enfrenta diversos assassinos que invadem a premiação onde ele acompanha Iris, mas os efeitos colaterais de seus novos superpoderes representam uma ameaça."
            filmefundo.style.backgroundImage = "url('img/destaque/flash.jpg')";            
            btplay.onclick = function(){window.open("https://www.youtube.com/embed/zdSJHU3NZkY?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/tv/60735-the-flash?language=pt-BR")};
            break;
        }
        case 13 : {
            titulo.innerHTML = "YOUR HONOR";
            descricao.innerHTML = "Um respeitado juiz que coloca sua reputação em jogo para esconder um crime e tentar livrar seu filho de uma condenação por atropelamento que envolve uma família do crime organizado."
            filmefundo.style.backgroundImage = "url('img/destaque/yourhonor.jpg')";            
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/jsVL1-uRlIw?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/tv/86430-your-honor?language=pt-BR")};
            break;
        }
        case 14 : {
            titulo.innerHTML = "22 COTRA A TERRA";
            descricao.innerHTML = "Antes dos eventos de “Soul” da Pixar, 22 se recusa a ir para a Terra, e recruta uma gangue de 5 outras novas almas em uma tentativa de rebelião. No entanto, enquanto as atividades de seus recrutas acabam levando a resultados inesperados, a conspiração subversiva de 22 pode levar a uma revelação surpreendente sobre o significado da vida."
            filmefundo.style.backgroundImage = "url('img/destaque/22.jpg')";            
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/VFbdd22PXBs?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/811367-22-vs-earth?language=pt-BR")};
            break;
        }
        case 15 : {
            titulo.innerHTML = "RAYA E O ULTIMO DRAGÃO";
            descricao.innerHTML = "O reino encantado Kumandra é dividido em cinco regiões e sua população venerava os dragões mágicos que eram presentes no reino, porém quando uma força maligna ameaçou a Terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra fraturada e seu povo dividido."
            filmefundo.style.backgroundImage = "url('img/destaque/Raya.jpg')";            
            btplay.onclick = function(){window.open("http://www.youtube.com/embed/wAQ3Gm39voM?")};
            btinfo.onclick = function(){window.open("https://www.themoviedb.org/movie/527774-raya-and-the-last-dragon?language=pt-BR")};
            break;
        }
    }
}

function filmeinicial(){
    mudapri(Math.floor(Math.random() * 16));
}
