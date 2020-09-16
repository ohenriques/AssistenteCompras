package com.example.assistentecompras.gondola;

import java.util.Collections;
import java.util.List;
import java.util.Map;

public class Gondola {

	private List<String> produtos;
	private Map<Integer,Integer> posicao; //coluna : linha
	
	public Gondola(List<String> produtos,Map<Integer,Integer> posicao) {
		this.produtos = produtos;
		this.posicao = posicao;
	}

	public List<String> getProdutos() {
		return Collections.unmodifiableList(produtos);
	}

	public Map<Integer, Integer> getPosicao() {
		return Collections.unmodifiableMap(posicao);
	}
	
	
	
}
