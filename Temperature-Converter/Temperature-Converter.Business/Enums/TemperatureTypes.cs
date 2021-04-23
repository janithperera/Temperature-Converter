using System.ComponentModel;

namespace Temperature_Converter.Business.Enums
{
	public enum TemperatureTypes
	{
		[Description("Celsius")]
		Celsius = 0,

		[Description("Kelvin")]
		Kelvin = 1,

		[Description("Fahrenheit")]
		Fahrenheit = 2
	}
}
