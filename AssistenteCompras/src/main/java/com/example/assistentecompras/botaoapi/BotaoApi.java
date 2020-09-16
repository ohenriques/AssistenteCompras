package com.example.assistentecompras.botaoapi;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BotaoApi {
	@CrossOrigin
	@RequestMapping( method = RequestMethod.GET, path="/botaoApi")
    public String getUsers() {
		return new JSONObject().put("retorno", "Retorno da API").toString();
    }
}
