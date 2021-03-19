$(function(){
	let a="https://rafaelescalfoni.github.io/desenv_web/filmes.json";

	$.get(a,function(data){
		console.log(data);
		$.each(data,function(index,filme){

			let $cat=$("<div>").addClass("catalogo");

			let $titulo=$("<h1>").text(filme.titulo).addClass("titulo");
			let $resumo=$("<h1>").text(filme.resumo).addClass("resumo");
			let $genero=$("<p>").text(filme.generos.join(", ")).addClass("generos");
            let $descrc=$("<p>").text(filme.descricao).addClass("descr");
			let $titsem=$("<p>").text("Títulos Semelhantes: ").addClass("titulossemelhantes");

			let classF=filme.classificacao;
			
            let $figura=$("<img>").attr("src",filme.figura).addClass("imagem");
			let $elenco=$("<p>").text("Elenco: "+filme.elenco.join(", ")).addClass("elenco");
            
			let rating=filme.opinioes[0].rating;

			switch(rating){
				case 4: $rating=$("<img>").attr("src", "./img/4estr.png").addClass("rate"); break;
				case 5: $rating=$("<img>").attr("src", "./img/5estr.png").addClass("rate"); break;
			}

            $cat.append($figura);
			$cat.append($titulo);
            if(classF==18){
				$IMGcls=$("<img>").attr("src", "./img/m18.png").addClass("classificacao");
				$cat.append($IMGcls);
            }else if(classF==16){
				$IMGcls=$("<img>").attr("src", "./img/m16.png").addClass("classificacao");
				$cat.append($IMGcls);
                }else if(classF==14){
				    $IMGcls=$("<img>").attr("src", "./img/m14.png").addClass("classificacao");
				    $cat.append($IMGcls);
			        }else if(classF==12){
				        $IMGcls=$("<img>").attr("src", "./img/m12.png").addClass("classificacao");
				        $cat.append($IMGcls);
			            }else{
				            $IMGcls=$("<img>").attr("src", "./img/L.png").addClass("classificacao");
				            $cat.append($IMGcls);
			            }
			$cat.append($rating);
			$cat.append($genero);
			$cat.append($resumo);
			$cat.append($elenco);
			$cat.append($titsem);
            $cat.append($descrc)

			$.each(filme.titulosSemelhantes, function(id, titulo){
				let $SEM=$("<li>").text("- "+data[titulo-1].titulo+" - ");
				$SEM.addClass("semel");
				$cat.append($SEM);
			});

			$(".principal").append($cat);
		})

	});
})