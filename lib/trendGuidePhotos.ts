/** Independently selected free-use editorial imagery for trend guides. Not official branded campaign photography. */
export type TrendGuideImage = {src:string;alt:string;caption:string;credit:string;source:string};
export type TrendGuidePhotoSet = {hero:TrendGuideImage;gallery:(TrendGuideImage&{afterSection:number})[]};
const trendGuides: Record<string,TrendGuidePhotoSet> = {
  "ikea-xbox-small-apartment-gaming-setup": {
    "hero": {
      "src": "https://images.pexels.com/photos/4913532/pexels-photo-4913532.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "alt": "Living-room television above a compact media table with game console and controller",
      "caption": "A shared television and a compact media cabinet can serve everyday living and gaming without creating another room.",
      "credit": "Maria Orlova / Pexels",
      "source": "https://www.pexels.com/photo/room-with-tv-hanging-on-wall-above-table-with-gadgets-4913532/"
    },
    "gallery": [
      {
        "afterSection": 1,
        "src": "https://images.pexels.com/photos/30366460/pexels-photo-30366460.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "alt": "Video game controller resting on a tidy modern desk",
        "caption": "A controller needs a convenient home close to the screen without taking over the whole living room.",
        "credit": "Jakub Zerdzicki / Pexels",
        "source": "https://www.pexels.com/photo/modern-gaming-setup-with-console-controller-30366460/"
      },
      {
        "afterSection": 4,
        "src": "https://images.pexels.com/photos/20648391/pexels-photo-20648391.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "alt": "Compact gaming desk with curved monitor, headphones and keyboard",
        "caption": "A dedicated work-and-play desk should be assessed at its real operating footprint.",
        "credit": "Minh Phuc / Pexels",
        "source": "https://www.pexels.com/photo/gaming-monitor-on-desk-20648391/"
      }
    ]
  },
  "burrowcore-small-apartment-decor": {
    "hero": {
      "src": "https://images.pexels.com/photos/20551212/pexels-photo-20551212.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "alt": "Warm vintage living room with sofa, wooden coffee table and houseplants",
      "caption": "A snug, layered atmosphere comes from light, textures and restrained furniture, not clutter.",
      "credit": "tu nguyen / Pexels",
      "source": "https://www.pexels.com/photo/a-sofa-and-coffee-table-standing-by-the-window-20551212/"
    },
    "gallery": [
      {
        "afterSection": 2,
        "src": "https://images.pexels.com/photos/5825564/pexels-photo-5825564.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "alt": "Comfortable sofa with fabric cushions beside a sunlit window",
        "caption": "Soft fabrics and natural light can make a compact space feel welcoming without adding furniture.",
        "credit": "Charlotte May / Pexels",
        "source": "https://www.pexels.com/photo/living-room-interior-with-furniture-near-window-in-house-5825564/"
      },
      {
        "afterSection": 5,
        "src": "https://images.pexels.com/photos/19889112/pexels-photo-19889112.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "alt": "Bright minimalist living room with pale sofa and a few tactile textiles",
        "caption": "Repeat a calm palette and keep the main route and surfaces clear.",
        "credit": "Lisa Anna / Pexels",
        "source": "https://www.pexels.com/photo/interior-of-a-modern-minimalist-living-room-19889112/"
      }
    ]
  }
};
export function getTrendGuidePhotos(slug:string):TrendGuidePhotoSet|undefined{return trendGuides[slug];}
