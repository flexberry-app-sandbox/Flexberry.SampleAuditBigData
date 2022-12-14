import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-test-simple-class1', 'Unit | Serializer | audit-test-simple-class1', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:audit-test-simple-class1',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:audit-test-simple-class1',
    'model:audit-test-simple-class2',
    'model:audit-test-simple-class3',
    'model:audit-test-simple-class4'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
