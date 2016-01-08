using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SawYouModels;
using Newtonsoft.Json;

namespace SawYou.Controllers
{
    public class MainController : Controller
    {
        private SawYouModels.IRepository _repository;
        //private List<SawYouModel> _SawYouList = new List<SawYouModel>() { new SawYouModel() { CheckInDescription = "asdadad", CheckInType = GenericEnumerations.CheckInType.Foursquare, Email = "ricky@hotmail.com", Id = 1, FoursquareVenueId = "1232313", FoursquareVenueAddress = "Karaiskaki 18 Kifisia", FoursquareVenueName = "Why Sleep" } };
        


        public MainController() {
            _repository = new SawYouModels.Repository();

        }

        // GET: Main
        public ActionResult Index()
        {
            return View();
        }

        [method:HttpPost]
        public JsonResult GetList() {

            return Json(this._repository.Get().ToList());
        }

        [method: HttpPost]
        public void AddModel(SawYouModel model) {

            this._repository.Save(model);
        }
    }
}