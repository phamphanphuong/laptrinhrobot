import sys

with open(r'g:\LapTrinhRobot.com\physics.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace colors
content = content.replace('stone-', 'gray-')
content = content.replace('purple-', 'primary-')

# Replace glass-card (will also remove it from style block, which is fine as it's replaced)
content = content.replace('glass-card', 'bg-white rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all')

# Replace chart colors
content = content.replace("#7c3aed", "#16a34a")
content = content.replace("rgba(124, 58, 237, 0.1)", "rgba(22, 163, 74, 0.1)")

with open(r'g:\LapTrinhRobot.com\physics.html', 'w', encoding='utf-8') as f:
    f.write(content)
