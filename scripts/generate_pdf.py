#!/usr/bin/env python3
"""
Génère le PDF à remettre, contenant le lien (URL) vers le portfolio en ligne.

Usage :
    python3 scripts/generate_pdf.py [URL_DU_SITE]

Exemple :
    python3 scripts/generate_pdf.py https://mohamed-ridwan.vercel.app

Le PDF est écrit dans livrables/Portfolio_Mohamed_Ridwan.pdf
"""
import sys
import os
import tempfile
import qrcode
from fpdf import FPDF

# --- Paramètres -------------------------------------------------------------
URL = sys.argv[1] if len(sys.argv) > 1 else "https://VOTRE-PORTFOLIO.vercel.app"

NAME = "Mohamed Ridwan"
TITLE = "Étudiant en informatique · Apprenti en data chez RATP"
SUBTITLE = "Portfolio de fin d'études · IUT de Créteil-Vitry (2023–2026)"
EMAIL = "mohamed.ridwan@outlook.fr"
LINKEDIN = "linkedin.com/in/mohamed-ridwan"
GITHUB = "github.com/RedOne777"

FONT_DIR = "/usr/share/fonts/truetype/liberation"
FONT = "Liberation"

NAVY = (7, 11, 20)
CYAN = (0, 113, 227)     # bleu Apple #0071e3 (accent principal)
VIOLET = (94, 92, 230)   # indigo #5e5ce6
GREEN = (29, 157, 116)   # vert #1d9d74
INK = (30, 41, 59)
MUTED = (100, 116, 139)
WHITE = (255, 255, 255)

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "livrables")
OUT_PATH = os.path.normpath(os.path.join(OUT_DIR, "Portfolio_Mohamed_Ridwan.pdf"))


def make_qr(url: str) -> str:
    qr = qrcode.QRCode(border=1, box_size=10,
                       error_correction=qrcode.constants.ERROR_CORRECT_M)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#070b14", back_color="white")
    tmp = tempfile.NamedTemporaryFile(suffix=".png", delete=False)
    img.save(tmp.name)
    return tmp.name


def build():
    os.makedirs(OUT_DIR, exist_ok=True)
    qr_path = make_qr(URL)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(False)
    pdf.add_font(FONT, "", os.path.join(FONT_DIR, "LiberationSans-Regular.ttf"))
    pdf.add_font(FONT, "B", os.path.join(FONT_DIR, "LiberationSans-Bold.ttf"))
    pdf.add_page()
    pdf.set_title("Portfolio BUT3 - Mohamed Ridwan")
    pdf.set_author(NAME)

    # ---- Bandeau supérieur ----
    pdf.set_fill_color(*NAVY)
    pdf.rect(0, 0, 210, 76, "F")

    # Badge initiales
    pdf.set_draw_color(*CYAN)
    pdf.set_line_width(0.6)
    pdf.rect(18, 20, 18, 18, "D")
    pdf.set_font(FONT, "B", 16)
    pdf.set_text_color(*CYAN)
    pdf.set_xy(18, 25.5)
    pdf.cell(18, 7, "MR", align="C")

    # Nom + titres
    pdf.set_xy(42, 19)
    pdf.set_font(FONT, "B", 30)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 14, NAME)

    pdf.set_xy(42, 35)
    pdf.set_font(FONT, "B", 11)
    pdf.set_text_color(*CYAN)
    pdf.cell(0, 6, TITLE)

    pdf.set_xy(42, 43)
    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(210, 220, 235)
    pdf.cell(0, 6, SUBTITLE)

    # ---- Corps ----
    pdf.set_text_color(*INK)
    pdf.set_xy(18, 90)
    pdf.set_font(FONT, "", 11)
    intro = ("Ce site est mon portfolio de fin d'études. Il démontre, preuves à "
             "l'appui, l'acquisition du plus haut niveau (dit « Confirmé ») de mes "
             "trois compétences en informatique, orientées gestion et exploitation "
             "des données.")
    pdf.multi_cell(174, 6.5, intro)

    # ---- Encadré URL ----
    box_y = 116
    pdf.set_draw_color(*CYAN)
    pdf.set_line_width(0.5)
    pdf.set_fill_color(240, 250, 255)
    pdf.rect(18, box_y, 120, 30, "DF")

    pdf.set_xy(24, box_y + 5)
    pdf.set_font(FONT, "B", 9)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 5, "MON PORTFOLIO EN LIGNE")

    pdf.set_xy(24, box_y + 13)
    pdf.set_font(FONT, "B", 13)
    pdf.set_text_color(*CYAN)
    pdf.cell(110, 8, URL, link=URL)

    pdf.set_xy(24, box_y + 22)
    pdf.set_font(FONT, "", 8.5)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4, "Cliquez sur le lien ou scannez le QR code →")

    # QR code
    pdf.image(qr_path, x=150, y=box_y - 1, w=42, h=42)

    # ---- Compétences ----
    comp_y = 162
    pdf.set_xy(18, comp_y)
    pdf.set_font(FONT, "B", 13)
    pdf.set_text_color(*INK)
    pdf.cell(0, 8, "Les 3 compétences démontrées (niveau Confirmé)")

    comps = [
        (CYAN, "Compétence 4", "Gérer les données de l'information",
         "Administrer une base de données, concevoir et réaliser des systèmes d'information décisionnels"),
        (VIOLET, "Compétence 5", "Conduire un projet",
         "Participer à la conception et à la mise en œuvre d'un projet système d'information"),
        (GREEN, "Compétence 6", "Collaborer au sein d'une équipe informatique",
         "Manager une équipe informatique"),
    ]
    y = comp_y + 12
    for color, code, titre, detail in comps:
        pdf.set_fill_color(*color)
        pdf.rect(18, y + 1, 4, 14, "F")
        pdf.set_xy(26, y)
        pdf.set_font(FONT, "B", 11)
        pdf.set_text_color(*INK)
        pdf.cell(0, 6, f"{code} - {titre}")
        pdf.set_xy(26, y + 6.5)
        pdf.set_font(FONT, "", 9)
        pdf.set_text_color(*MUTED)
        pdf.multi_cell(166, 4.6, detail)
        y += 20

    # ---- Pied de page ----
    pdf.set_draw_color(220, 226, 235)
    pdf.set_line_width(0.3)
    pdf.line(18, 280, 192, 280)
    pdf.set_xy(18, 283)
    pdf.set_font(FONT, "", 9)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 5, f"{EMAIL}   |   {LINKEDIN}   |   {GITHUB}")

    pdf.output(OUT_PATH)
    os.unlink(qr_path)
    print(f"PDF genere : {OUT_PATH}")
    print(f"URL integree : {URL}")
    if "VOTRE-PORTFOLIO" in URL:
        print("\n[!] URL par defaut. Relancez avec votre vraie URL :")
        print("    python3 scripts/generate_pdf.py https://votre-vraie-url")


if __name__ == "__main__":
    build()
