package com.example.assistentecompras.roteador;

import java.util.Collections;
import java.util.List;

import com.example.assistentecompras.gondola.Gondola;

public class Rota {
	
	private List<Gondola> gondolasOrdenadas;

	public Rota(List<Gondola> gondola) {
		//TODO criar lógica de negócio aqui.
	}
	
	public List<Gondola> getGondolasOrdenadas() {
		return Collections.unmodifiableList(gondolasOrdenadas);
	}
	
}
