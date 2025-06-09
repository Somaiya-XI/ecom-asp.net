using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using LapShop.Models;
using LapShop.Bl;

namespace LapShop.ApiControllers;

[Route("api/[controller]")]
[ApiController]
public class OrderController : ControllerBase
{
    private IItems itemService;
    public OrderController(IItems itemservice)
    {
        itemService = itemservice;
    }
    
    
    [HttpPost("{itemId}")]
    public async Task<IActionResult> UpdateQuantity(int itemId, [FromBody] int quantity)
    {
        ShoppingCart _oCart;

        if (HttpContext.Request.Cookies["Cart"] is not null)
            _oCart = JsonConvert.DeserializeObject<ShoppingCart>(HttpContext.Request.Cookies["Cart"]);
        else
        {
            return BadRequest("WHAAT");
        }
        var item = itemService.GetById(itemId);

        var itemInList = _oCart.lstItems.Where(a => a.ItemId == itemId).FirstOrDefault();

        if (itemInList != null)
        {
            itemInList.Qty = quantity;
            itemInList.Total = itemInList.Qty * itemInList.Price;
        }
        
        HttpContext.Response.Cookies.Append("Cart", JsonConvert.SerializeObject(_oCart));

        return Ok(new { message = "Quantity updated", qty = itemInList?.Qty });
    }
}