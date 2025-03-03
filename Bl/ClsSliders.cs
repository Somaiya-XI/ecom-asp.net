using Domains;

namespace LapShop.Bl
{
    public interface ISliders
    {
        public List<TbSlider> GetAll();
        public TbSlider GetById(int id);
        public bool Save(TbSlider slider);
        public bool Delete(int id);
    }

    public class ClsSliders : ISliders
    {
        LapShopContext context;
        public ClsSliders(LapShopContext ctx)
        {
            context = ctx;
        }
        public List<TbSlider> GetAll()
        {
            try
            {
                var lstSliders = context.TbSliders.ToList();
                return lstSliders;
            }
            catch
            {
                return new List<TbSlider>();
            }
        }

        public TbSlider GetById(int id)
        {
            try
            {
                var slider = context.TbSliders.FirstOrDefault(a => a.SliderId == id && a.CurrentState == 1);
                return slider;
            }
            catch
            {
                return new TbSlider();
            }
        }

        public bool Save(TbSlider slider)
        {
            try
            {
                if (slider.SliderId == 0)
                {
                    slider.CreatedBy = "1";
                    slider.CreatedDate = DateTime.Now;
                    context.TbSliders.Add(slider);
                }
                else
                {
                    slider.UpdatedBy = "1";
                    slider.UpdatedDate = DateTime.Now;
                    context.Entry(slider).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                }
                context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                var slider = GetById(id);
                slider.CurrentState = 0;
                context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
