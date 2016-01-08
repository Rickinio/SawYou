using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SawYou.Controllers
{
    public class TemplatesController : Controller
    {
        // GET: Template
        [Route("~/templates/{*name}")]
        public PartialViewResult GetTemplate(string name)
        {
            return PartialView(name);
        }
    }
}