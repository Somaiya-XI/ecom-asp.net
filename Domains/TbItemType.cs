﻿using System;
using System.Collections.Generic;

namespace Domains
{
    public partial class TbItemType
    {
        public TbItemType()
        {
            TbItems = new HashSet<TbItem>();
        }

        public int ItemTypeId { get; set; }
        public string ItemTypeName { get; set; } = null!;
        public string? ImageName { get; set; }
        public int CurrentState { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; } = null!;
        public DateTime? UpdatedDate { get; set; }
        public string? UpdatedBy { get; set; }

        public virtual ICollection<TbItem> TbItems { get; set; }
    }
}
