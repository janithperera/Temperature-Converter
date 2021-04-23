using Temperature_Converter.Business.Dtos;
using Temperature_Converter.Business.Enums;

namespace Temperature_Converter.Business.Interfaces
{
	public interface ITemperatureServices
	{
		/// <summary>
		/// Calculates the specified type.
		/// </summary>
		/// <param name="type">The type.</param>
		/// <param name="value">The value.</param>
		/// <returns></returns>
		TemperatureResultDto Calculate(TemperatureTypes type, double value);
	}
}
