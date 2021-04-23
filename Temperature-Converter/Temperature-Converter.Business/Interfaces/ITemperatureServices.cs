using Temperature_Converter.Business.Dtos;

namespace Temperature_Converter.Business.Interfaces
{
	public interface ITemperatureServices
	{
		TemperatureResultDto Calculate(string type, double value);
	}
}
