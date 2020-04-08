const OrderType = {
  BUILD : 'Build',
  MOVE : 'Move',
  MOVEVIACONVOY : 'MoveViaConvoy',
  HOLD : 'Hold',
  CONVOY : 'Convoy',
  SUPPORT : 'Support',
  DISBAND : 'Disband',
} as const
type OrderType = (typeof OrderType)[keyof typeof OrderType]

export default OrderType
