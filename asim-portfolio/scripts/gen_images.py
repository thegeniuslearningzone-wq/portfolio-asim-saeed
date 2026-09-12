import os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

INK = "#10151A"
SURFACE = "#171E26"
SURFACE_HI = "#1F2733"
LINE = "#29323D"
SIGNAL = "#F2A63A"
PULSE = "#5EE6B0"
IVORY = "#EDEFEF"
MUTED = "#5B6472"

W, H = 1200, 800


def frame(inner: str) -> str:
    return f'''<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{INK}"/>
  <rect x="0.5" y="0.5" width="{W-1}" height="{H-1}" fill="none" stroke="{LINE}"/>
  {inner}
</svg>'''


def write(name: str, svg: str):
    path = os.path.join(OUT, name)
    with open(path, "w") as f:
        f.write(svg)
    print("wrote", path)


# ---------------------------------------------------------------- FlowBoard
def flowboard_cover():
    cols = []
    col_x = [60, 430, 800]
    col_titles_w = [90, 70, 110]
    heights = [
        [120, 70, 160, 90],
        [90, 150, 60],
        [180, 110],
    ]
    accent_col = 0
    for ci, x in enumerate(col_x):
        header_fill = SIGNAL if ci == accent_col else SURFACE_HI
        cols.append(f'<rect x="{x}" y="70" width="340" height="34" rx="6" fill="{header_fill}" opacity="{0.9 if ci==accent_col else 1}"/>')
        cols.append(f'<rect x="{x+16}" y="80" width="{col_titles_w[ci]}" height="12" rx="3" fill="{INK if ci==accent_col else IVORY}" opacity="0.8"/>')
        y = 128
        for hi, h in enumerate(heights[ci]):
            cols.append(f'<rect x="{x}" y="{y}" width="340" height="{h}" rx="10" fill="{SURFACE}" stroke="{LINE}"/>')
            cols.append(f'<rect x="{x+22}" y="{y+22}" width="{260}" height="10" rx="3" fill="{IVORY}" opacity="0.75"/>')
            cols.append(f'<rect x="{x+22}" y="{y+42}" width="150" height="8" rx="3" fill="{MUTED}"/>')
            dotcolor = PULSE if (ci + hi) % 3 == 0 else SIGNAL if (ci+hi) % 3 == 1 else MUTED
            cols.append(f'<circle cx="{x+310}" cy="{y+h-24}" r="9" fill="{dotcolor}" opacity="0.9"/>')
            y += h + 18
    inner = "\n  ".join(cols)
    write("flowboard-cover.svg", frame(inner))


def flowboard_gallery_1():
    # task detail card close-up
    inner = f'''
  <rect x="120" y="90" width="960" height="620" rx="16" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="160" y="140" width="420" height="22" rx="5" fill="{IVORY}" opacity="0.85"/>
  <rect x="160" y="180" width="300" height="14" rx="4" fill="{MUTED}"/>
  <rect x="160" y="230" width="860" height="1" fill="{LINE}"/>
  <rect x="160" y="260" width="120" height="34" rx="17" fill="{SIGNAL}"/>
  <rect x="292" y="260" width="140" height="34" rx="17" fill="{SURFACE_HI}" stroke="{LINE}"/>
  <rect x="160" y="330" width="760" height="12" rx="4" fill="{IVORY}" opacity="0.55"/>
  <rect x="160" y="356" width="700" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  <rect x="160" y="382" width="620" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  <circle cx="182" cy="470" r="16" fill="{PULSE}"/>
  <circle cx="220" cy="470" r="16" fill="{SIGNAL}" opacity="0.85"/>
  <circle cx="258" cy="470" r="16" fill="{SURFACE_HI}" stroke="{LINE}"/>
  <rect x="160" y="520" width="860" height="1" fill="{LINE}"/>
  <rect x="160" y="550" width="200" height="14" rx="4" fill="{MUTED}"/>
  <rect x="160" y="580" width="860" height="60" rx="10" fill="{SURFACE_HI}" stroke="{LINE}"/>
  '''
    write("flowboard-gallery-1.svg", frame(inner))


def flowboard_gallery_2():
    # timeline / progress view
    bars = []
    data = [40, 65, 30, 80, 55, 90, 45]
    x = 160
    for v in data:
        bars.append(f'<rect x="{x}" y="{620-v*4}" width="60" height="{v*4}" rx="6" fill="{SURFACE_HI}" stroke="{LINE}"/>')
        bars.append(f'<rect x="{x}" y="{620-v*4}" width="60" height="10" rx="5" fill="{SIGNAL}"/>')
        x += 110
    inner = f'''
  <rect x="120" y="120" width="360" height="16" rx="4" fill="{IVORY}" opacity="0.85"/>
  <rect x="120" y="150" width="220" height="12" rx="4" fill="{MUTED}"/>
  <line x1="120" y1="640" x2="1080" y2="640" stroke="{LINE}"/>
  {''.join(bars)}
  <rect x="860" y="120" width="220" height="70" rx="12" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="880" y="140" width="90" height="10" rx="3" fill="{MUTED}"/>
  <rect x="880" y="160" width="140" height="16" rx="4" fill="{PULSE}"/>
  '''
    write("flowboard-gallery-2.svg", frame(inner))


# ---------------------------------------------------------------- ShopNest
def shopnest_cover():
    cards = []
    positions = [(90, 90), (420, 90), (750, 90), (90, 420), (420, 420), (750, 420)]
    highlighted = 2
    for i, (x, y) in enumerate(positions):
        fill = SURFACE
        cards.append(f'<rect x="{x}" y="{y}" width="290" height="290" rx="14" fill="{fill}" stroke="{LINE}"/>')
        cards.append(f'<rect x="{x+18}" y="{y+18}" width="254" height="170" rx="8" fill="{SURFACE_HI}"/>')
        cards.append(f'<rect x="{x+18}" y="{y+206}" width="170" height="12" rx="4" fill="{IVORY}" opacity="0.75"/>')
        cards.append(f'<rect x="{x+18}" y="{y+228}" width="90" height="10" rx="3" fill="{MUTED}"/>')
        price_color = SIGNAL if i == highlighted else IVORY
        cards.append(f'<rect x="{x+200}" y="{y+224}" width="72" height="18" rx="4" fill="{price_color}" opacity="{1 if i==highlighted else 0.85}"/>')
        if i == highlighted:
            cards.append(f'<circle cx="{x+254}" cy="{y+254}" r="20" fill="{SIGNAL}"/>')
            cards.append(f'<rect x="{x+246}" y="{y+248}" width="16" height="12" rx="2" fill="{INK}"/>')
    inner = "\n  ".join(cards)
    write("shopnest-cover.svg", frame(inner))


def shopnest_gallery_1():
    inner = f'''
  <rect x="100" y="100" width="480" height="600" rx="14" fill="{SURFACE_HI}"/>
  <rect x="140" y="140" width="400" height="260" rx="10" fill="{SURFACE}"/>
  <circle cx="200" cy="440" r="14" fill="{SURFACE}" stroke="{LINE}"/>
  <circle cx="240" cy="440" r="14" fill="{SIGNAL}"/>
  <circle cx="280" cy="440" r="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="640" y="120" width="440" height="26" rx="5" fill="{IVORY}" opacity="0.85"/>
  <rect x="640" y="164" width="200" height="14" rx="4" fill="{MUTED}"/>
  <rect x="640" y="210" width="120" height="28" rx="6" fill="{SIGNAL}"/>
  <rect x="640" y="260" width="440" height="1" fill="{LINE}"/>
  <rect x="640" y="290" width="410" height="12" rx="4" fill="{IVORY}" opacity="0.5"/>
  <rect x="640" y="314" width="380" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  <rect x="640" y="338" width="340" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  <rect x="640" y="400" width="440" height="60" rx="10" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="640" y="480" width="200" height="54" rx="10" fill="{SIGNAL}"/>
  <rect x="856" y="480" width="224" height="54" rx="10" fill="{SURFACE}" stroke="{LINE}"/>
  '''
    write("shopnest-gallery-1.svg", frame(inner))


def shopnest_gallery_2():
    steps = ["Cart", "Shipping", "Payment", "Done"]
    inner_parts = []
    x = 140
    for i, s in enumerate(steps):
        fill = SIGNAL if i <= 1 else SURFACE_HI
        inner_parts.append(f'<circle cx="{x}" cy="140" r="22" fill="{fill}"/>')
        if i < len(steps) - 1:
            inner_parts.append(f'<rect x="{x+22}" y="134" width="188" height="4" fill="{LINE}"/>')
        x += 210
    inner = f'''
  {''.join(inner_parts)}
  <rect x="140" y="220" width="900" height="420" rx="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="180" y="260" width="300" height="16" rx="4" fill="{IVORY}" opacity="0.85"/>
  <rect x="180" y="300" width="820" height="60" rx="8" fill="{SURFACE_HI}"/>
  <rect x="180" y="376" width="820" height="60" rx="8" fill="{SURFACE_HI}"/>
  <rect x="180" y="452" width="400" height="60" rx="8" fill="{SURFACE_HI}"/>
  <rect x="700" y="560" width="300" height="50" rx="10" fill="{SIGNAL}"/>
  '''
    write("shopnest-gallery-2.svg", frame(inner))


# ---------------------------------------------------------------- Pulse Analytics
def pulse_cover():
    import math
    pts = []
    for i in range(9):
        x = 700 + i * 45
        y = 260 - int(60 * math.sin(i * 0.7)) - i * 6
        pts.append((x, y))
    path = " ".join(f'{"L" if i else "M"}{x},{y}' for i, (x, y) in enumerate(pts))
    bars = []
    for i, v in enumerate([50, 90, 40, 70, 100, 60]):
        bars.append(f'<rect x="{700+i*58}" y="{620-v*3}" width="34" height="{v*3}" rx="4" fill="{SURFACE_HI}"/>')
    inner = f'''
  <rect x="60" y="70" width="320" height="150" rx="12" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="90" y="100" width="120" height="12" rx="4" fill="{MUTED}"/>
  <rect x="90" y="130" width="180" height="30" rx="4" fill="{PULSE}"/>
  <rect x="410" y="70" width="320" height="150" rx="12" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="440" y="100" width="120" height="12" rx="4" fill="{MUTED}"/>
  <rect x="440" y="130" width="150" height="30" rx="4" fill="{SIGNAL}"/>
  <rect x="60" y="260" width="1080" height="1" fill="{LINE}"/>
  <path d="{path}" fill="none" stroke="{PULSE}" stroke-width="4"/>
  <rect x="60" y="380" width="580" height="340" rx="12" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="90" y="410" width="140" height="12" rx="4" fill="{MUTED}"/>
  <line x1="90" y1="680" x2="600" y2="680" stroke="{LINE}"/>
  {''.join(bars[:0])}
  <rect x="690" y="380" width="450" height="340" rx="12" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="720" y="410" width="160" height="12" rx="4" fill="{MUTED}"/>
  <line x1="720" y1="640" x2="1100" y2="640" stroke="{LINE}"/>
  {''.join(bars)}
  '''
    write("pulse-cover.svg", frame(inner))


def pulse_gallery_1():
    rows = []
    y = 160
    labels_w = [220, 160, 260, 190, 140]
    for i, w in enumerate(labels_w):
        dot = PULSE if i % 2 == 0 else SIGNAL
        rows.append(f'<circle cx="160" cy="{y}" r="6" fill="{dot}"/>')
        rows.append(f'<rect x="184" y="{y-8}" width="{w}" height="14" rx="4" fill="{IVORY}" opacity="0.7"/>')
        rows.append(f'<rect x="980" y="{y-8}" width="100" height="14" rx="4" fill="{MUTED}"/>')
        rows.append(f'<rect x="120" y="{y+26}" width="960" height="1" fill="{LINE}"/>')
        y += 66
    inner = f'''
  <rect x="100" y="100" width="1000" height="600" rx="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="140" y="130" width="260" height="18" rx="4" fill="{IVORY}" opacity="0.85"/>
  {''.join(rows)}
  '''
    write("pulse-gallery-1.svg", frame(inner))


def pulse_gallery_2():
    import math
    pts = []
    for i in range(14):
        x = 140 + i * 68
        y = 500 - int(140 * abs(math.sin(i * 0.5))) - i * 4
        pts.append((x, y))
    line = " ".join(f'{"L" if i else "M"}{x},{y}' for i, (x, y) in enumerate(pts))
    area = line + f" L{pts[-1][0]},640 L{pts[0][0]},640 Z"
    inner = f'''
  <rect x="100" y="120" width="1000" height="560" rx="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="140" y="160" width="300" height="18" rx="4" fill="{IVORY}" opacity="0.85"/>
  <rect x="140" y="188" width="180" height="12" rx="4" fill="{MUTED}"/>
  <path d="{area}" fill="{PULSE}" opacity="0.14"/>
  <path d="{line}" fill="none" stroke="{PULSE}" stroke-width="4"/>
  <line x1="140" y1="640" x2="1060" y2="640" stroke="{LINE}"/>
  '''
    write("pulse-gallery-2.svg", frame(inner))


# ---------------------------------------------------------------- Nova Notes
def nova_cover():
    rows = []
    y = 130
    for i in range(6):
        active = i == 1
        rows.append(f'<rect x="60" y="{y}" width="300" height="72" rx="10" fill="{SURFACE_HI if active else SURFACE}"/>')
        rows.append(f'<rect x="84" y="{y+18}" width="180" height="12" rx="4" fill="{IVORY if active else MUTED}" opacity="{0.9 if active else 0.7}"/>')
        rows.append(f'<rect x="84" y="{y+40}" width="230" height="10" rx="3" fill="{MUTED}"/>')
        if active:
            rows.append(f'<rect x="60" y="{y}" width="4" height="72" fill="{SIGNAL}"/>')
        y += 86
    inner = f'''
  <rect x="60" y="70" width="1080" height="660" rx="16" fill="{SURFACE}" stroke="{LINE}"/>
  {''.join(rows)}
  <line x1="400" y1="70" x2="400" y2="730" stroke="{LINE}"/>
  <rect x="440" y="120" width="380" height="26" rx="5" fill="{IVORY}" opacity="0.9"/>
  <rect x="440" y="164" width="200" height="12" rx="4" fill="{MUTED}"/>
  <rect x="440" y="210" width="640" height="12" rx="4" fill="{IVORY}" opacity="0.55"/>
  <rect x="440" y="234" width="600" height="12" rx="4" fill="{IVORY}" opacity="0.45"/>
  <rect x="440" y="258" width="640" height="12" rx="4" fill="{SIGNAL}" opacity="0.35"/>
  <rect x="440" y="282" width="500" height="12" rx="4" fill="{IVORY}" opacity="0.45"/>
  <rect x="440" y="330" width="640" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  <rect x="440" y="354" width="560" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  '''
    write("nova-cover.svg", frame(inner))


def nova_gallery_1():
    chips = ["Ideas", "Work", "Personal", "Archive"]
    chip_els = []
    x = 160
    for i, c in enumerate(chips):
        w = 60 + len(c) * 9
        fill = SIGNAL if i == 0 else SURFACE_HI
        chip_els.append(f'<rect x="{x}" y="160" width="{w}" height="40" rx="20" fill="{fill}"/>')
        x += w + 16
    inner = f'''
  <rect x="120" y="110" width="960" height="120" rx="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="160" y="140" width="500" height="20" rx="5" fill="{IVORY}" opacity="0.8"/>
  {''.join(chip_els)}
  <rect x="120" y="270" width="460" height="340" rx="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="150" y="300" width="220" height="16" rx="4" fill="{IVORY}" opacity="0.85"/>
  <rect x="150" y="330" width="380" height="10" rx="3" fill="{MUTED}"/>
  <rect x="150" y="350" width="340" height="10" rx="3" fill="{MUTED}"/>
  <rect x="620" y="270" width="460" height="340" rx="14" fill="{SURFACE}" stroke="{LINE}"/>
  <rect x="650" y="300" width="220" height="16" rx="4" fill="{IVORY}" opacity="0.85"/>
  <rect x="650" y="330" width="380" height="10" rx="3" fill="{MUTED}"/>
  <rect x="650" y="350" width="300" height="10" rx="3" fill="{MUTED}"/>
  '''
    write("nova-gallery-1.svg", frame(inner))


def nova_gallery_2():
    inner = f'''
  <rect x="380" y="70" width="440" height="660" rx="28" fill="{SURFACE}" stroke="{LINE}" stroke-width="3"/>
  <rect x="410" y="110" width="380" height="16" fill="{LINE}"/>
  <rect x="410" y="150" width="220" height="20" rx="5" fill="{IVORY}" opacity="0.9"/>
  <rect x="410" y="186" width="150" height="12" rx="4" fill="{MUTED}"/>
  <rect x="410" y="230" width="380" height="1" fill="{LINE}"/>
  <rect x="410" y="256" width="360" height="12" rx="4" fill="{IVORY}" opacity="0.5"/>
  <rect x="410" y="280" width="330" height="12" rx="4" fill="{IVORY}" opacity="0.45"/>
  <rect x="410" y="304" width="360" height="12" rx="4" fill="{PULSE}" opacity="0.4"/>
  <rect x="410" y="328" width="280" height="12" rx="4" fill="{IVORY}" opacity="0.4"/>
  <circle cx="740" cy="680" r="26" fill="{SIGNAL}"/>
  <rect x="730" y="668" width="20" height="4" fill="{INK}"/>
  <rect x="738" y="660" width="4" height="20" fill="{INK}"/>
  '''
    write("nova-gallery-2.svg", frame(inner))


if __name__ == "__main__":
    flowboard_cover(); flowboard_gallery_1(); flowboard_gallery_2()
    shopnest_cover(); shopnest_gallery_1(); shopnest_gallery_2()
    pulse_cover(); pulse_gallery_1(); pulse_gallery_2()
    nova_cover(); nova_gallery_1(); nova_gallery_2()
