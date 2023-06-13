using CRUD.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private readonly ShopDbContext _shopDbContext;

        public ShopController(ShopDbContext shopDbContext)
        {
            _shopDbContext = shopDbContext;
        }

        [HttpGet]
        [Route("GetItem")]
        public async Task<IEnumerable<Item>> GetItem()
        {
            return await _shopDbContext.Item.ToListAsync();
        }

        [HttpPost]
        [Route("AddItem")]
        public async Task<Item> AddItem(Item objItem)
        {
            _shopDbContext.Item.Add(objItem);
            await _shopDbContext.SaveChangesAsync();
            return objItem;
        }

        [HttpPatch]
        [Route("UpdateItem/{id}")]
        public async Task<Item> UpdateStudent(Item objItem)
        {
            _shopDbContext.Entry(objItem).State = EntityState.Modified;
            await _shopDbContext.SaveChangesAsync();
            return objItem;
        }

        [HttpDelete]
        [Route("DeleteItem/{id}")]
        public bool DeleteItem(int id)
        {
            bool a = false;
            var item = _shopDbContext.Item.Find(id);
            if (item != null)
            {
                a = true;
                _shopDbContext.Entry(item).State = EntityState.Deleted;
                _shopDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }

    }

}