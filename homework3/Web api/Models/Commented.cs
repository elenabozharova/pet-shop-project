//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Web_api.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class Commented
    {
        public int Id_user { get; set; }
        public int Id_petshop { get; set; }
        public string Comment { get; set; }
    
        [JsonIgnore]
        public virtual Petshop Petshop { get; set; }
        public virtual User User { get; set; }
    }
}
