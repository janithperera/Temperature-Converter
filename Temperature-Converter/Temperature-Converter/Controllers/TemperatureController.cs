using Microsoft.AspNetCore.Mvc;
using Temperature_Converter.Business.Enums;
using Temperature_Converter.Business.Interfaces;

namespace Temperature_Converter.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TemperatureController : ControllerBase
	{
		/// <summary>
		/// The temperature services
		/// </summary>
		private readonly ITemperatureServices temperatureServices;

		/// <summary>
		/// Initializes a new instance of the <see cref="TemperatureController"/> class.
		/// </summary>
		/// <param name="temperatureServices">The temperature services.</param>
		public TemperatureController(ITemperatureServices temperatureServices)
		{
			this.temperatureServices = temperatureServices;
		}

		/// <summary>
		/// Calculates the specified type.
		/// </summary>
		/// <param name="type">The type.</param>
		/// <param name="value">The value.</param>
		/// <returns></returns>
		[HttpGet("calculate")]
		public ActionResult Calculate(TemperatureTypes type, double value)
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
