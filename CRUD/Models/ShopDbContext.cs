using Microsoft.EntityFrameworkCore;



namespace CRUD.Models
{
    public class ShopDbContext:DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options) : base(options)
        {
        }
        public DbSet<Item> Item { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-TQSEMNF\\SQLEXPRESS;Initial Catalog=Shop;Encrypt=False;Integrated Security=True");
        }
    }
}