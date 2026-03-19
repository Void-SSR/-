from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "assets" / "web-art"
OUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1600, 900
HOME_W, HOME_H = 900, 1600


STAGE_CONFIGS = [
    {"id": 1, "slug": "neon", "bg": ("#0b0f1f", "#2e1134"), "accent": "#ff5ca8", "accent2": "#73d4ff", "skin": "#f7d2c5", "hair": "#1a1022"},
    {"id": 2, "slug": "frost", "bg": ("#07121e", "#12374c"), "accent": "#c5f4ff", "accent2": "#7adfff", "skin": "#f7dcd2", "hair": "#f5f9ff"},
    {"id": 3, "slug": "thunder", "bg": ("#0a1017", "#261a33"), "accent": "#ffd36e", "accent2": "#f7fbff", "skin": "#f6d0c2", "hair": "#312343"},
    {"id": 4, "slug": "shrine", "bg": ("#160d16", "#3b1228"), "accent": "#ff94be", "accent2": "#ffd0dc", "skin": "#f7d3c7", "hair": "#241019"},
    {"id": 5, "slug": "steamdock", "bg": ("#100d0b", "#432619"), "accent": "#f2bf79", "accent2": "#fff1ce", "skin": "#f3cfbe", "hair": "#1a1411"},
    {"id": 6, "slug": "desert", "bg": ("#120e09", "#5e3618"), "accent": "#ffd38c", "accent2": "#fff0c6", "skin": "#f0c7ae", "hair": "#2f1e12"},
    {"id": 7, "slug": "opera", "bg": ("#120b10", "#4d1731"), "accent": "#ff9f9f", "accent2": "#ffd7d1", "skin": "#f5d2c7", "hair": "#251019"},
    {"id": 8, "slug": "abysslab", "bg": ("#071017", "#12323e"), "accent": "#7ce8e8", "accent2": "#d7ffff", "skin": "#eec8bc", "hair": "#0f1520"},
    {"id": 9, "slug": "greenhouse", "bg": ("#0c120c", "#23401f"), "accent": "#b8f87a", "accent2": "#e6ffc3", "skin": "#f4d0c2", "hair": "#162312"},
    {"id": 10, "slug": "skycity", "bg": ("#09111a", "#23395d"), "accent": "#dbe8ff", "accent2": "#f6fbff", "skin": "#efd2c4", "hair": "#18243e"},
]


def hex_to_rgba(value: str, alpha: int = 255) -> tuple[int, int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4)) + (alpha,)


def vertical_gradient(size: tuple[int, int], top: str, bottom: str) -> Image.Image:
    width, height = size
    base = Image.new("RGBA", size)
    draw = ImageDraw.Draw(base)
    r1, g1, b1, _ = hex_to_rgba(top)
    r2, g2, b2, _ = hex_to_rgba(bottom)
    for y in range(height):
        t = y / max(1, height - 1)
        color = (
            round(r1 + (r2 - r1) * t),
            round(g1 + (g2 - g1) * t),
            round(b1 + (b2 - b1) * t),
            255,
        )
        draw.line((0, y, width, y), fill=color)
    return base


def add_glow(base: Image.Image, center: tuple[int, int], radius: int, color: str, alpha: int) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse((center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius), fill=hex_to_rgba(color, alpha))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.28))
    base.alpha_composite(layer)


def add_noise(base: Image.Image, strength: int = 18) -> None:
    width, height = base.size
    noise = Image.new("L", (width, height))
    pixels = noise.load()
    rng = random.Random(42)
    for y in range(height):
        for x in range(width):
            pixels[x, y] = 128 + rng.randint(-strength, strength)
    alpha = Image.new("L", (width, height), 22)
    grain = Image.merge("RGBA", (noise, noise, noise, alpha))
    base.alpha_composite(grain)


def draw_city(draw: ImageDraw.ImageDraw, accent: str) -> None:
    color = hex_to_rgba("#101525")
    for idx, left in enumerate((90, 260, 420, 620, 840, 1060, 1250)):
        width = 90 + idx * 16
        top = 120 + (idx % 3) * 50
        draw.rounded_rectangle((left, top, left + width, 760), radius=18, fill=color)
    for left in (150, 480, 900, 1180):
        draw.rectangle((left, 180, left + 12, 770), fill=hex_to_rgba(accent, 85))


def draw_crystals(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left, height in ((130, 360), (350, 420), (540, 320), (840, 460), (1100, 380), (1340, 300)):
        draw.polygon(
            [(left, 760), (left + 70, 760 - height), (left + 140, 760), (left + 78, 760 - height * 0.46)],
            fill=hex_to_rgba(accent, 125),
        )


def draw_torii(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left in (180, 760, 1220):
        draw.rectangle((left, 280, left + 28, 760), fill=hex_to_rgba("#2a0e17"))
        draw.rectangle((left + 132, 280, left + 160, 760), fill=hex_to_rgba("#2a0e17"))
        draw.rounded_rectangle((left - 10, 250, left + 170, 288), radius=12, fill=hex_to_rgba(accent, 130))
        draw.rounded_rectangle((left - 40, 212, left + 200, 244), radius=16, fill=hex_to_rgba("#521d30", 220))


def draw_curtains(draw: ImageDraw.ImageDraw, accent: str) -> None:
    draw.rectangle((0, 0, 220, 860), fill=hex_to_rgba("#330d18", 230))
    draw.rectangle((1380, 0, 1600, 860), fill=hex_to_rgba("#330d18", 230))
    for x in range(40, 210, 38):
        draw.line((x, 0, x + 18, 860), fill=hex_to_rgba(accent, 60), width=4)
    for x in range(1410, 1580, 38):
        draw.line((x, 0, x + 18, 860), fill=hex_to_rgba(accent, 60), width=4)


def draw_greenhouse(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left in (160, 520, 900, 1240):
        draw.rounded_rectangle((left, 180, left + 180, 760), radius=28, outline=hex_to_rgba(accent, 125), width=6)
        draw.line((left + 90, 180, left + 90, 760), fill=hex_to_rgba(accent, 90), width=5)
    for base in (120, 420, 820, 1160):
        draw.arc((base, 560, base + 240, 920), 180, 360, fill=hex_to_rgba("#7ed858", 180), width=12)


def draw_skycity(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left, width, top in ((150, 110, 260), (380, 120, 210), (650, 135, 160), (980, 125, 220), (1260, 118, 250)):
        draw.rectangle((left, top, left + width, 760), fill=hex_to_rgba("#131b2c"))
        draw.polygon([(left, top), (left + width / 2, top - 90), (left + width, top)], fill=hex_to_rgba(accent, 95))
    draw.line((240, 200, 1360, 160), fill=hex_to_rgba(accent, 70), width=8)
    draw.line((260, 230, 1340, 190), fill=hex_to_rgba(accent, 55), width=5)


def draw_docks(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left in (160, 470, 780, 1120):
        draw.rectangle((left, 250, left + 18, 760), fill=hex_to_rgba("#1e1711"))
        draw.rectangle((left, 250, left + 170, 278), fill=hex_to_rgba(accent, 95))
        draw.line((left + 170, 278, left + 110, 420), fill=hex_to_rgba(accent, 95), width=10)
    for x in (320, 660, 1030, 1350):
        draw.ellipse((x, 580, x + 120, 760), fill=hex_to_rgba("#2c1d12", 220))


def draw_lab(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left in (220, 520, 820, 1120):
        draw.rounded_rectangle((left, 170, left + 160, 760), radius=60, fill=hex_to_rgba("#102632"))
        draw.rounded_rectangle((left + 18, 208, left + 142, 720), radius=48, outline=hex_to_rgba(accent, 130), width=6)
    for y in (220, 340, 460):
        draw.line((150, y, 1450, y), fill=hex_to_rgba(accent, 38), width=4)


def draw_desert(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left in (180, 470, 800, 1170):
        draw.polygon([(left, 760), (left + 60, 250), (left + 180, 760)], fill=hex_to_rgba("#312014"))
        draw.rectangle((left + 58, 360, left + 120, 760), fill=hex_to_rgba(accent, 75))
    for dx in range(0, 1600, 110):
        draw.arc((dx - 120, 620, dx + 180, 920), 200, 330, fill=hex_to_rgba("#8b673d", 90), width=10)


def draw_towers(draw: ImageDraw.ImageDraw, accent: str) -> None:
    for left in (160, 480, 820, 1180):
        draw.rectangle((left, 200, left + 72, 760), fill=hex_to_rgba("#141923"))
        draw.line((left + 36, 180, left + 36, 760), fill=hex_to_rgba(accent, 95), width=8)
        draw.line((left - 60, 340, left + 132, 250), fill=hex_to_rgba(accent, 115), width=7)
        draw.line((left - 40, 470, left + 112, 370), fill=hex_to_rgba(accent, 80), width=5)


def draw_near_ground(draw: ImageDraw.ImageDraw, color: str) -> None:
    draw.polygon([(0, 900), (0, 690), (180, 760), (330, 640), (520, 740), (760, 600), (1040, 760), (1260, 620), (1600, 780), (1600, 900)], fill=hex_to_rgba(color, 255))


def draw_female_silhouette(base: Image.Image, cfg: dict, x: int, y: int, scale: float, tilt: float = 0.0) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    skin = hex_to_rgba(cfg["skin"], 255)
    suit = hex_to_rgba("#0f1120", 240)
    accent = hex_to_rgba(cfg["accent"], 255)
    hair = hex_to_rgba(cfg["hair"], 255)

    body_w = 220 * scale
    body_h = 520 * scale

    # Legs
    draw.polygon(
        [(x - 24 * scale, y + 90 * scale), (x + 12 * scale, y + body_h), (x + 46 * scale, y + body_h), (x + 8 * scale, y + 100 * scale)],
        fill=skin,
    )
    draw.polygon(
        [(x + 34 * scale, y + 70 * scale), (x + 84 * scale, y + body_h), (x + 120 * scale, y + body_h), (x + 68 * scale, y + 76 * scale)],
        fill=skin,
    )

    # Heels / boots
    draw.rectangle((x - 4 * scale, y + body_h - 10 * scale, x + 56 * scale, y + body_h + 20 * scale), fill=suit)
    draw.rectangle((x + 72 * scale, y + body_h - 10 * scale, x + 132 * scale, y + body_h + 20 * scale), fill=suit)

    # Hips and torso
    draw.ellipse((x - 36 * scale, y + 10 * scale, x + 132 * scale, y + 130 * scale), fill=skin)
    draw.polygon(
        [
            (x - 14 * scale, y + 34 * scale),
            (x + 52 * scale, y - 110 * scale),
            (x + 110 * scale, y + 30 * scale),
            (x + 104 * scale, y + 160 * scale),
            (x + 6 * scale, y + 154 * scale),
        ],
        fill=skin,
    )
    # Bust
    draw.ellipse((x - 12 * scale, y - 88 * scale, x + 78 * scale, y - 16 * scale), fill=skin)
    draw.ellipse((x + 34 * scale, y - 94 * scale, x + 126 * scale, y - 18 * scale), fill=skin)

    # Outfit
    draw.polygon(
        [
            (x + 10 * scale, y - 96 * scale),
            (x + 112 * scale, y - 102 * scale),
            (x + 126 * scale, y + 66 * scale),
            (x + 58 * scale, y + 96 * scale),
            (x - 8 * scale, y + 66 * scale),
        ],
        fill=suit,
    )
    draw.polygon(
        [
            (x + 18 * scale, y + 38 * scale),
            (x + 80 * scale, y + 38 * scale),
            (x + 62 * scale, y + 160 * scale),
            (x + 8 * scale, y + 150 * scale),
        ],
        fill=suit,
    )
    draw.polygon(
        [(x + 90 * scale, y + 24 * scale), (x + 140 * scale, y + 58 * scale), (x + 122 * scale, y + 154 * scale), (x + 58 * scale, y + 120 * scale)],
        fill=suit,
    )
    draw.rectangle((x + 24 * scale, y + 160 * scale, x + 104 * scale, y + 185 * scale), fill=accent)
    draw.line((x + 50 * scale, y - 18 * scale, x + 76 * scale, y + 70 * scale), fill=hex_to_rgba("#f6fbff", 110), width=max(2, int(4 * scale)))

    # Arms
    draw.polygon([(x + 12 * scale, y - 84 * scale), (x - 44 * scale, y + 40 * scale), (x - 8 * scale, y + 52 * scale), (x + 36 * scale, y - 22 * scale)], fill=skin)
    draw.polygon([(x + 112 * scale, y - 82 * scale), (x + 172 * scale, y + 34 * scale), (x + 144 * scale, y + 48 * scale), (x + 86 * scale, y - 12 * scale)], fill=skin)

    # Head + hair
    draw.ellipse((x + 16 * scale, y - 208 * scale, x + 112 * scale, y - 106 * scale), fill=skin)
    draw.polygon(
        [
            (x + 6 * scale, y - 216 * scale),
            (x + 78 * scale, y - 252 * scale),
            (x + 132 * scale, y - 196 * scale),
            (x + 130 * scale, y - 92 * scale),
            (x + 88 * scale, y - 44 * scale),
            (x + 26 * scale, y - 68 * scale),
        ],
        fill=hair,
    )
    draw.polygon(
        [(x + 20 * scale, y - 188 * scale), (x - 24 * scale, y - 40 * scale), (x + 24 * scale, y + 48 * scale), (x + 52 * scale, y - 68 * scale)],
        fill=hair,
    )

    # Rim light
    rim = Image.new("RGBA", base.size, (0, 0, 0, 0))
    rim_draw = ImageDraw.Draw(rim)
    rim_draw.line(
        [(x + 120 * scale, y - 194 * scale), (x + 152 * scale, y - 32 * scale), (x + 138 * scale, y + 138 * scale), (x + 118 * scale, y + 310 * scale)],
        fill=hex_to_rgba(cfg["accent2"], 180),
        width=max(3, int(8 * scale)),
    )
    rim = rim.filter(ImageFilter.GaussianBlur(8))
    layer.alpha_composite(rim)

    shadow = layer.filter(ImageFilter.GaussianBlur(28))
    dark_shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    dark_shadow.alpha_composite(shadow)
    dark_shadow = ImageChops.multiply(dark_shadow, Image.new("RGBA", base.size, (35, 20, 40, 255)))
    base.alpha_composite(dark_shadow, dest=(14, 18))
    base.alpha_composite(layer)


def build_stage_art(cfg: dict) -> Image.Image:
    random.seed(cfg["id"] * 53)
    base = vertical_gradient((W, H), cfg["bg"][0], cfg["bg"][1])
    add_glow(base, (W - 260, 180), 220, cfg["accent"], 72)
    add_glow(base, (W - 520, 320), 160, cfg["accent2"], 46)
    add_glow(base, (250, 130), 170, cfg["accent"], 30)

    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle((80, 92, W - 80, 790), radius=44, outline=hex_to_rgba("#ffffff", 24), width=2)
    draw.line((118, 142, W - 118, 142), fill=hex_to_rgba(cfg["accent2"], 72), width=4)
    draw.line((118, 740, W - 118, 740), fill=hex_to_rgba(cfg["accent2"], 38), width=3)

    env = cfg["slug"]
    if env == "neon":
        draw_city(draw, cfg["accent"])
    elif env == "frost":
        draw_crystals(draw, cfg["accent2"])
    elif env == "thunder":
        draw_towers(draw, cfg["accent"])
    elif env == "shrine":
        draw_torii(draw, cfg["accent"])
    elif env == "steamdock":
        draw_docks(draw, cfg["accent"])
    elif env == "desert":
        draw_desert(draw, cfg["accent"])
    elif env == "opera":
        draw_curtains(draw, cfg["accent"])
    elif env == "abysslab":
        draw_lab(draw, cfg["accent"])
    elif env == "greenhouse":
        draw_greenhouse(draw, cfg["accent"])
    elif env == "skycity":
        draw_skycity(draw, cfg["accent"])

    draw_near_ground(draw, "#090c12")
    draw.rectangle((0, 0, W, 140), fill=hex_to_rgba("#060910", 64))
    draw.rectangle((0, 780, W, H), fill=hex_to_rgba("#05070b", 145))

    draw_female_silhouette(base, cfg, x=1040, y=345, scale=1.55)
    draw_female_silhouette(base, cfg, x=1125, y=365, scale=0.92)
    base = base.filter(ImageFilter.GaussianBlur(0.35))
    add_noise(base, strength=15)

    haze = Image.new("RGBA", base.size, (0, 0, 0, 0))
    haze_draw = ImageDraw.Draw(haze)
    for y in (250, 330, 420, 520, 640):
        haze_draw.rounded_rectangle((40, y, W - 40, y + 18), radius=10, fill=hex_to_rgba(cfg["accent2"], 16))
    haze = haze.filter(ImageFilter.GaussianBlur(12))
    base.alpha_composite(haze)
    return base


def build_home_ambient() -> Image.Image:
    cfg = STAGE_CONFIGS[0]
    base = vertical_gradient((HOME_W, HOME_H), "#09121b", "#2e1428")
    add_glow(base, (HOME_W - 220, 340), 240, cfg["accent"], 84)
    add_glow(base, (HOME_W - 320, 520), 210, cfg["accent2"], 42)
    draw_female_silhouette(base, cfg, x=HOME_W - 360, y=680, scale=2.0)
    add_noise(base, strength=10)
    return base.filter(ImageFilter.GaussianBlur(0.25))


def build_noise_tile() -> Image.Image:
    tile = Image.new("RGBA", (256, 256), (16, 20, 28, 0))
    rng = random.Random(84)
    pixels = tile.load()
    for y in range(256):
        for x in range(256):
            value = 20 + rng.randint(0, 28)
            alpha = 16 + rng.randint(0, 24)
            pixels[x, y] = (value, value + 4, value + 10, alpha)
    return tile.filter(ImageFilter.GaussianBlur(0.4))


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for cfg in STAGE_CONFIGS:
        art = build_stage_art(cfg)
        art.save(OUT_DIR / f"stage-{cfg['id']:02d}-{cfg['slug']}.png", optimize=True)
    build_home_ambient().save(OUT_DIR / "home-ambient-boss.png", optimize=True)
    build_noise_tile().save(OUT_DIR / "ui-noise.png", optimize=True)
    print(f"Generated {len(STAGE_CONFIGS)} stage arts and UI textures in {OUT_DIR}")


if __name__ == "__main__":
    main()
