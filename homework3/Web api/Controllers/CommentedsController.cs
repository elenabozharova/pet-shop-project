using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Web_api.Models;

namespace Web_api.Controllers
{
    public class CommentedsController : ApiController
    {
        private DBModelPetshops db = new DBModelPetshops();

        // GET: api/Commenteds
        public IQueryable<Commented> GetCommenteds()
        {
            return db.Commenteds;
        }

        // GET: api/Commenteds/5
        [ResponseType(typeof(Commented))]
        public IHttpActionResult GetCommented(int id)
        {
            Commented commented = db.Commenteds.Find(id);
            if (commented == null)
            {
                return NotFound();
            }

            return Ok(commented);
        }

        // PUT: api/Commenteds/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCommented(int id, Commented commented)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != commented.Id_user)
            {
                return BadRequest();
            }

            db.Entry(commented).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentedExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Commenteds
        [ResponseType(typeof(Commented))]
        public IHttpActionResult PostCommented(Commented commented)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Commenteds.Add(commented);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CommentedExists(commented.Id_user))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = commented.Id_user }, commented);
        }

        // DELETE: api/Commenteds/5
        [ResponseType(typeof(Commented))]
        public IHttpActionResult DeleteCommented(int id)
        {
            Commented commented = db.Commenteds.Find(id);
            if (commented == null)
            {
                return NotFound();
            }

            db.Commenteds.Remove(commented);
            db.SaveChanges();

            return Ok(commented);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CommentedExists(int id)
        {
            return db.Commenteds.Count(e => e.Id_user == id) > 0;
        }
    }
}