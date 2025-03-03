using LapShop.Bl;
using Domains;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LapShop.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        ISettings oClsSettings;
        ISliders _Slider;
        public SettingController(ISettings oISettings, ISliders Slider)
        {
            oClsSettings = oISettings;
            _Slider = Slider;
        }
        // GET: api/<SettingController>
        [HttpGet]
        public TbSettings Get()
        {
            var oSeeting = oClsSettings.GetAll();
            return oSeeting;
        }

        // GET api/<SettingController>/5
        [HttpGet("slider")]
        public IActionResult GetSliders()
        {
            var lstSliders = new List<string>();

            var sliders = _Slider.GetAll();
            foreach (var s in sliders)
            {
                Console.WriteLine(s);
                lstSliders.Add(s.ImageName);
            }

            return Ok(lstSliders);
        }

        // POST api/<SettingController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SettingController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SettingController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
