using System;
using Temperature_Converter.Business.Dtos;
using Temperature_Converter.Business.Enums;
using Temperature_Converter.Business.Interfaces;

namespace Temperature_Converter.Business
{
	public class TemperatureServices : ITemperatureServices
	{
		private const double kelvinConst = 273.15;

		/// <summary>
		/// Calculates the specified type.
		/// </summary>
		/// <param name="type">The type.</param>
		/// <param name="value">The value.</param>
		/// <returns></returns>
		public TemperatureResultDto Calculate(TemperatureTypes type, double value)
		{
			var result = new TemperatureResultDto();
			try
			{
				switch (type)
				{
					case TemperatureTypes.Celsius:
						{
							result.Celsius = value;
							result.Fahrenheit = (value * (9.0 / 5.0)) + 32;
							result.Kelvin = value + kelvinConst;
							break;
						}
					case TemperatureTypes.Kelvin:
						{
							result.Kelvin = value;
							result.Celsius = value - 273.15;
							result.Fahrenheit = (result.Celsius * (9.0 / 5.0)) + 32;
							break;
						}
					case TemperatureTypes.Fahrenheit:
						{
							result.Fahrenheit = value;
							result.Celsius = (value - 32) * (5.0 / 9.0);
							result.Kelvin = result.Celsius + kelvinConst;
							break;
						}
					default: break;
				}
			}catch(Exception ex)
			{
				result.Error = true;
				result.Message = "An error occured while calculating the temperature";
				result.ErrorMessage = ex.Message;
			}
			return result;
		}
	}
}
