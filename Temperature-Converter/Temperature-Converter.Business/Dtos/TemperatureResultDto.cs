namespace Temperature_Converter.Business.Dtos
{
	public class TemperatureResultDto
	{
		public double Celsius { get; set; } = 0;
		public double Kelvin { get; set; } = 0;
		public double Fahrenheit { get; set; } = 0;
		public bool Error { get; set; } = false;
		public string Message { get; set; } = string.Empty;
		public string ErrorMessage { get; set; } = string.Empty;
	}
}
