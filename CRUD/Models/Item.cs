using System.ComponentModel.DataAnnotations;

namespace CRUD.Models
{
    public class Item
    {
        [Key]
        public int id { get; set; }
        public string? itemname { get; set; }
        public int price{get; set;}
        public int sellprice { get; set;}
        public int stock { get; set;}
    }
}
