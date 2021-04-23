using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Temperature_Converter.Business.Interfaces;

namespace Temperature_Converter.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TemperatureController : ControllerBase
	{
		private readonly ITemperatureServices temperatureServices;

		public TemperatureController(ITemperatureServices temperatureServices)
		{
			this.temperatureServices = temperatureServices;
		}


		[HttpGet("calculate")]
		public ActionResult Calculate(string type, double value)
		{
			var result = temperatureServices.Calculate(type, value);
			if (result.Error)
			{
				return StatusCode(500, result);
			}
			return Ok(result);
		}
	}
}
