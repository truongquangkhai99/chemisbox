
function loadDetailsForElement(notation) {
	var model = {
		"notation" : notation
	};
	$.ajax({
		url : "element/loadDetails",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			$("#notationUpdate").val(data.element.notation);
			$("#nameUpdate").val(data.element.name);
			$("#numberOfAtomicUpdate").val(data.element.numberOfAtomic);
			$("#atomicVolumeUpdate").val(data.element.atomicVolume);
			$("#classifyUpdate").val(data.element.classify);
			$("#groupUpdate").val(data.element.groupUpdate);
			$("#cycleUpdate").val(data.element.cycle);
			$("#electronConfigurationUpdate").val(data.element.electronConfiguration);
			$("#layersUpdate").val(data.element.layers);
			$("#descriptionUpdate").val(data.element.description);
			$("#colorUpdate").val(data.element.color);
			$("#conditionUpdate").val(data.element.condition);
			$("#meltingTemperatureUpdate").val(data.element.meltingTemperature);
			$("#boilingTemperatureUpdate").val(data.element.boilingTemperature);
			$("#imgUpdate").val(data.element.img);
		},
		error : function(msg) {
			alert("error");
		}
	});
}

function loadDetailsForEquation(id) {
	var model = {
		"equationId" : id
	};
	$.ajax({
		url : "equation/loadDetails",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			$("#equationIdUpdate").val(data.equation.equationId);
			$("#equationUpdate").val(data.equation.equation);
			$("#descriptionUpdate").val(data.equation.description);
			$("#conditionUpdate").val(data.equation.condition);
			$("#videoLinkUpdate").val(data.equation.videoLink);

			if (data.equation.ionEquation != null) {
				$("#ionIdUpdate").val(data.equation.ionEquation.ionId);
				$("#ionEquationUpdate").val(
						data.equation.ionEquation.ionEquation);
				$("#ionShortcutUpdate").val(
						data.equation.ionEquation.shortcutIonEquation);
			}

			if (data.equation.oxiReduceEquation != null) {
				$("#oxiIdUpdate").val(
						data.equation.oxiReduceEquation.oxiReduceId);
				$("#oxiEquationUpdate").val(
						data.equation.oxiReduceEquation.oxiEquation);
				$("#molOxiUpdate").val(data.equation.oxiReduceEquation.molOxi);
				$("#reduceEquationUpdate").val(
						data.equation.oxiReduceEquation.reduceEquation);
				$("#molReduceUpdate").val(
						data.equation.oxiReduceEquation.molReduce);
				$("#summaryUpdate")
						.val(data.equation.oxiReduceEquation.summary);
			}
		},
		error : function(msg) {
			alert("error");
		}
	});
}

function loadDetailsForChemical(id) {
	var model = {
		"chemicalId" : id
	};
	$.ajax({
		url : "chemical/loadDetails",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			$("#chemicalId").val(data.chemical.id);
			$("#chemicalNameUpdate").val(data.chemical.name);
			$("#differenceNameUpdate").val(data.chemical.differenceName);
			$("#formulaUpdate").val(data.chemical.formula);
			$("#quantityUpdate").val(data.chemical.quantity);
			$("#descriptionUpdate").val(data.chemical.description);
			$("#densityUpdate").val(data.chemical.density);
			$("#meltingTemperatureUpdate")
					.val(data.chemical.meltingTemperature);
			$("#boilingTemperatureUpdate")
					.val(data.chemical.boilingTemperature);
			$("#solubilityInWaterUpdate").val(data.chemical.solubilityInWater);
			$("#ignitionPointUpdate").val(data.chemical.ignitionPoint);
			$("#flavourUpdate").val(data.chemical.flavour);
			$("#imgUpdate").val(data.chemical.img);
		},
		error : function(msg) {
			alert("error");
		}
	});
}

$("#btnUpdateElement").click(function() {
	var notation = $.trim($("#notationUpdate").val());
	var name = $.trim($("#nameUpdate").val());
	var numberOfAtomic = $.trim($("#numberOfAtomicUpdate").val());
	var atomicVolume = $.trim($("#atomicVolumeUpdate").val());
	var classify = $.trim($("#classifyUpdate").val());
	var group = $.trim($("#groupUpdate").val());
	var cycle = $.trim($("#cycleUpdate").val());
	var electronConfiguration = $.trim($("#electronConfigurationUpdate").val());
	var layers = $.trim($("#layersUpdate").val());
	var description = $.trim($("#descriptionUpdate").val());
	var color = $.trim($("#colorUpdate").val());
	var condition = $.trim($("#conditionUpdate").val());
	var meltingTemperature = $.trim($("#meltingTemperatureUpdate").val());
	var boilingTemperature = $.trim($("#boilingTemperatureUpdate").val());
	var img = $.trim($("#imgUpdate").val());

	if (stringIsNullOrEmpty(notation)) {
		return;
	}

	var jsonData = {
		"notation" : notation,
		"name" : name,
		"numberOfAtomic" : numberOfAtomic,
		"atomicVolume" : atomicVolume,
		"classify" : classify,
		"group" : group,
		"cycle" : cycle,
		"electronConfiguration" : electronConfiguration,
		"layers" : layers,
		"description" : description,
		"color" : color,
		"condition" : condition,
		"meltingTemperature" : meltingTemperature,
		"boilingTemperature" : boilingTemperature,
		"img" : img
	};

	var model = {
		"element" : jsonData
	};
	$.ajax({
		url : "element/update",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			alert("success");
		},
		error : function(msg) {
			alert("error");
		}
	});
});

$("#btnUpdateChemical").click(function() {
	var chemicalId = $.trim($("#chemicalId").val());
	var chemicalName = $.trim($("#chemicalNameUpdate").val());
	var differenceName = $.trim($("#differenceNameUpdate").val());
	var formula = $.trim($("#formulaUpdate").val());
	var quantity = $.trim($("#quantityUpdate").val());
	var description = $.trim($("#descriptionUpdate").val());
	var density = $.trim($("#densityUpdate").val());
	var meltingTemperature = $.trim($("#meltingTemperatureUpdate").val());
	var boilingTemperature = $.trim($("#boilingTemperatureUpdate").val());
	var solubilityInWater = $.trim($("#solubilityInWaterUpdate").val());
	var ignitionPoint = $.trim($("#ignitionPointUpdate").val());
	var flavour = $.trim($("#flavourUpdate").val());
	var img = $.trim($("#imgUpdate").val());

	if (stringIsNullOrEmpty(chemicalName)) {
		return;
	}

	if (stringIsNullOrEmpty(formula)) {
		return;
	}

	if (!isNumeric(quantity)) {
		return;
	}

	var jsonData = {
		"id" : chemicalId,
		"name" : chemicalName,
		"differenceName" : differenceName,
		"formula" : formula,
		"quantity" : quantity,
		"description" : description,
		"density" : density,
		"meltingTemperature" : meltingTemperature,
		"boilingTemperature" : boilingTemperature,
		"solubilityInWater" : solubilityInWater,
		"ignitionPoint" : ignitionPoint,
		"flavour" : flavour,
		"img" : img
	};

	var model = {
		"chemical" : jsonData
	};
	$.ajax({
		url : "chemical/update",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			alert("success");
		},
		error : function(msg) {
			alert("error");
		}
	});
});

$("#btnAddChemical").click(function() {
	var chemicalName = $.trim($("#chemicalName").val());
	var differenceName = $.trim($("#differenceName").val());
	var formula = $.trim($("#formula").val());
	var quantity = $.trim($("#quantity").val());
	var description = $.trim($("#description").val());
	var density = $.trim($("#density").val());
	var meltingTemperature = $.trim($("#meltingTemperature").val());
	var boilingTemperature = $.trim($("#boilingTemperature").val());
	var solubilityInWater = $.trim($("#solubilityInWater").val());
	var ignitionPoint = $.trim($("#ignitionPoint").val());
	var flavour = $.trim($("#flavour").val());
	var img = $.trim($("#img").val());

	if (stringIsNullOrEmpty(chemicalName)) {
		return;
	}

	if (stringIsNullOrEmpty(formula)) {
		return;
	}

	if (!isNumeric(quantity)) {
		return;
	}

	var jsonData = {
		"name" : chemicalName,
		"differenceName" : differenceName,
		"formula" : formula,
		"quantity" : quantity,
		"description" : description,
		"density" : density,
		"meltingTemperature" : meltingTemperature,
		"boilingTemperature" : boilingTemperature,
		"solubilityInWater" : solubilityInWater,
		"ignitionPoint" : ignitionPoint,
		"flavour" : flavour,
		"img" : img
	};

	var model = {
		"chemical" : jsonData
	};
	$.ajax({
		url : "chemical/add",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			alert("success");
		},
		error : function(msg) {
			alert("error");
		}
	});
});

$("#btnAddElement").click(function() {
	var notation = $.trim($("#notation").val());
	var name = $.trim($("#name").val());
	var numberOfAtomic = $.trim($("#numberOfAtomic").val());
	var atomicVolume = $.trim($("#atomicVolume").val());
	var classify = $.trim($("#classify").val());
	var group = $.trim($("#group").val());
	var cycle = $.trim($("#cycle").val());
	var electronConfiguration = $.trim($("#electronConfiguration").val());
	var layers = $.trim($("#layers").val());
	var description = $.trim($("#description").val());
	var color = $.trim($("#color").val());
	var condition = $.trim($("#condition").val());
	var meltingTemperature = $.trim($("#meltingTemperature").val());
	var boilingTemperature = $.trim($("#boilingTemperature").val());
	var img = $.trim($("#img").val());

	if (stringIsNullOrEmpty(notation)) {
		return;
	}

	var jsonData = {
		"notation" : chemicalName,
		"name" : differenceName,
		"numberOfAtomic" : formula,
		"atomicVolume" : quantity,
		"classify" : description,
		"group" : density,
		"cycle" : meltingTemperature,
		"electronConfiguration" : boilingTemperature,
		"layers" : solubilityInWater,
		"description" : ignitionPoint,
		"color" : flavour,
		"condition" : condition,
		"meltingTemperature" : meltingTemperature,
		"boilingTemperature" : boilingTemperature,
		"img" : img
	};

	var model = {
		"element" : jsonData
	};
	$.ajax({
		url : "element/add",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			alert("success");
		},
		error : function(msg) {
			alert("error");
		}
	});
});

$("#btnAddEquation").click(
function() {
	var equation = $.trim($("#equation").val());
	var description = $.trim($("#description").val());
	var condition = $.trim($("#condition").val());
	var videoLink = $.trim($("#videoLink").val());

	var ionEquation = $.trim($("#ionEquation").val());
	var ionShortcut = $.trim($("#ionShortcut").val());

	var molOxi = $.trim($("#molOxi").val());
	var oxiEquation = $.trim($("#oxiEquation").val());

	var molReduce = $.trim($("#molReduce").val());
	var reduceEquation = $.trim($("#reduceEquation").val());

	var summary = $.trim($("#summary").val());

	if (stringIsNullOrEmpty(equation)) {
		return;
	}

	if (stringIsNullOrEmpty(condition)) {
		return;
	}

	var ionData = null;
	if (!stringIsNullOrEmpty(ionEquation)
			&& !stringIsNullOrEmpty(ionShortcut)) {
		ionData = {
			"ionEquation" : ionEquation,
			"shortcutIonEquation" : ionShortcut
		};
	}
	var oxiData = null;
	if (!stringIsNullOrEmpty(reduceEquation)
			&& !stringIsNullOrEmpty(oxiEquation)
			&& !stringIsNullOrEmpty(summary)) {
		oxiData = {
			"molReduce" : molReduce,
			"reduceEquation" : reduceEquation,
			"molOxi" : molOxi,
			"oxiEquation" : oxiEquation,
			"summary" : summary
		};
	}

	var jsonData = {
		"equation" : equation,
		"description" : description,
		"condition" : condition,
		"videoLink" : videoLink,
		"ionEquation" : ionData,
		"oxiReduceEquation" : oxiData
	};

	var model = {
		"equation" : jsonData
	};
	$.ajax({
		url : "equation/add",
		type : "POST",
		data : JSON.stringify(model),
		dataType : "json",
		contentType : "application/json",
		success : function(data) {
			alert("success");
		},
		error : function(msg) {
			alert("error");
		}
	});
});

$("#btnUpdateEquation").click(
		function() {
			var equationId = $.trim($("#equationIdUpdate").val());
			var equation = $.trim($("#equationUpdate").val());
			var description = $.trim($("#descriptionUpdate").val());
			var condition = $.trim($("#conditionUpdate").val());
			var videoLink = $.trim($("#videoLinkUpdate").val());

			var ionId = $.trim($("#ionIdUpdate").val());
			var ionEquation = $.trim($("#ionEquationUpdate").val());
			var ionShortcut = $.trim($("#ionShortcutUpdate").val());

			var oxiId = $.trim($("#oxiIdUpdate").val());
			var molOxi = $.trim($("#molOxiUpdate").val());
			var oxiEquation = $.trim($("#oxiEquationUpdate").val());

			var molReduce = $.trim($("#molReduceUpdate").val());
			var reduceEquation = $.trim($("#reduceEquationUpdate").val());

			var summary = $.trim($("#summaryUpdate").val());

			if (stringIsNullOrEmpty(equation)) {
				return;
			}

			if (stringIsNullOrEmpty(condition)) {
				return;
			}

			var ionData = {
				"ionId" : ionId,
				"ionEquation" : ionEquation,
				"shortcutIonEquation" : ionShortcut
			};
			var oxiData = {
				"oxiReduceId" : oxiId,
				"molReduce" : molReduce,
				"reduceEquation" : reduceEquation,
				"molOxi" : molOxi,
				"oxiEquation" : oxiEquation,
				"summary" : summary
			};
			

			var jsonData = {
				"equationId" : equationId,
				"equation" : equation,
				"description" : description,
				"condition" : condition,
				"videoLink" : videoLink,
				"ionEquation" : ionData,
				"oxiReduceEquation" : oxiData
			};

			var model = {
				"equation" : jsonData
			};
			$.ajax({
				url : "equation/update",
				type : "POST",
				data : JSON.stringify(model),
				dataType : "json",
				contentType : "application/json",
				success : function(data) {
					$("#btnCancelUpdate").click();
				},
				error : function(msg) {
					alert("error");
				}
			});
		});

function setFormVisible(id, value) {
	if (value) {
		$(id).css("display", "block");
	} else {
		$(id).css("display", "none");
	}
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function stringIsNullOrEmpty(source) {
	if(typeof(source) == 'undefined' || source == null|| source == "" || source == ''){
		return true;
	}
	return false;
}