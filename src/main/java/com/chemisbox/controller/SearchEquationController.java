package com.chemisbox.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chemisbox.business.SearchEquationBusiness;
import com.chemisbox.exception.ChemisboxException;
import com.chemisbox.input.SearchEquationInputParam;
import com.chemisbox.model.SearchEquationModel;
import com.chemisbox.output.SearchEquationOutputParam;
import com.chemisbox.utilities.ChemisboxUtilities;

@Controller
public class SearchEquationController extends
		ChemisboxController<SearchEquationBusiness, SearchEquationModel> {

	@Autowired
	private SearchEquationBusiness searchEquationBusiness;

	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public String searchEquationBySubmit(@ModelAttribute("searchModel") SearchEquationModel model,
            ModelMap map) throws ChemisboxException {
		this.model = new SearchEquationModel();
		this.model.setKeyWord(model.getKeyWord());
		this.model = execute(this.model);
		map.put("searchModel", this.model);
		return "search";
	}
	
	@RequestMapping(value = "/search/{keyword}")
	public @ResponseBody SearchEquationModel searchEquationByAjax(
			@PathVariable("keyword") String keyWord) throws ChemisboxException {
		this.model = new SearchEquationModel();
		this.model.setKeyWord(keyWord);
		return execute(this.model);
	}
	
	@Override
	public  SearchEquationModel execute(SearchEquationModel model) throws ChemisboxException {
		if (ChemisboxUtilities.isNullOrEmpty(model.getKeyWord())) {
			this.model.setErrorMessage("Key word is null");
			return this.model;
		}
		this.business = this.searchEquationBusiness;
		SearchEquationInputParam inParam = new SearchEquationInputParam();
		inParam.setKeyWord(ChemisboxUtilities.trimFullSize(model.getKeyWord()));
		SearchEquationOutputParam outParam = this.business.execute(inParam);
		if (!ChemisboxUtilities.isNullOrEmpty(outParam.getErrorMessage())) {
			this.model.setErrorMessage(outParam.getErrorMessage());
		}
		this.model.setEquationList(outParam.getEquationList());
		this.model.setChemical(outParam.getChemical());
		this.model.setElement(outParam.getElement());
		return this.model;
	}
}