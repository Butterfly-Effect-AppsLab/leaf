import pyexcel as p
import pprint

records = p.get_sheet(file_name="toothfresh.xlsx", sheet_name='Zákazníci')
print(records)


def all_empty(items):
    return all(x == items[0] for x in items)


result = []
data = {}
order_question = 1
order_choice = 1
for row in records:
    print(row)
    if all_empty(row):
        if data:
            result.append(data)
        data = {}
        order_choice = 1
        continue

    if row[0]:
        data[f'question_{order_question}'] = row[0]
        order_question += 1

    else:
        data[f'choice_{order_choice}'] = {
            'choice_text': row[1],
            'choice_is_correct': row[2],
            'explanation': row[3]
        }
        order_choice += 1

result.append(data)
print('/////////////////////////////////////')
print(pprint.pformat(result))

