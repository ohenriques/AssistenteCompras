package com.example.assistentecompras.roteador;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.assistentecompras.gondola.Gondola;

@RestController
public class RoteadorController {
	
	@CrossOrigin
	@RequestMapping( method = RequestMethod.POST, path="/roteador")
    public Rota criaRotas(@RequestBody List<Gondola> gondola) {
		return new Rota(gondola);
    }
}
