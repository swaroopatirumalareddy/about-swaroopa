QUnit.module('MAIN MODULE', {})

QUnit.test('TEST calcVolume', assert => {
  assert.equal(volumesphere(1), 4.19, 'Test radius = 1')
  assert.equal(volumesphere(3), 113.10, 'Test radius = 3')
  assert.equal(volumesphere(5), 523.60, 'Test radius = 5')
  assert.equal(volumesphere(7), 1436.76, 'Test radius = 7')
  assert.equal(volumesphere(10), 4188.79, 'Test radius = 10')
})