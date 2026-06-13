# Motorcycle Dynamics — findings for this repo (Jolt vehicle/motorcycle)

This repo (the JS bindings of Jolt Physics, with the `motogp_sim.html` /
`vehicle_motorcycle.html` examples) was evaluated as a candidate engine for the
"Multibody Motorcycle Realistic Dynamics" effort. The full benchmark chain
(G1–G9) lives in **`mojoco-simulation`**, branch
`claude/motorcycle-dynamics-multibody-28pytq`, folder `benchmarks/`.

## Conclusion: excellent for game feel, a dead-end for engineering-grade dynamics

The decisive test (Gate 1) is the Whipple–Carvallo benchmark: a single-track
vehicle self-stabilises in a speed band purely from **gyroscopic + trail
coupling**, with no controller. The discriminating low-level question is whether
the engine integrates that velocity-dependent multibody coupling.

- **Jolt's `MotorcycleController`** models the bike as **one rigid body** + raycast
  wheels, and stays upright via an explicit **lean controller** — a PID spring
  (`mLeanSpringConstant`, `mLeanSpringDamping`, `mLeanSpringIntegrationCoefficient`,
  `EnableLeanController`, verified in `JoltJS.idl`). There is no separately
  spinning front-wheel body feeding the steer DOF, so the gyroscopic steer↔lean
  coupling that creates real single-track stability is **absent by construction**;
  balance is *imposed* by the PID, not emergent. The tyre is a friction-circle, so
  there is **no camber thrust** (the dominant moto cornering force). `motogp_sim.html`
  layers arcade assists on top (manual lean-torque, anti-wheelie, traction control).

- **MuJoCo** (used in `mojoco-simulation`) integrates the general articulated-body
  equations, so the gyroscopic coupling is present by construction (verified to
  machine precision, Gate 1) and a multibody bicycle **self-stabilises with no
  controller** (Gate 1b). That is why the dynamics work was built on MuJoCo.

## So this repo's role
`motogp_sim.html` remains a great **interactive / visual (simcade)** motorcycle —
keep it for that. It is not, and is not meant to be, an engineering-grade dynamics
model. No code change is needed here; this note records the evaluation and points
to the engineering-grade model in `mojoco-simulation/benchmarks/` (README +
REFERENCES). The honest label for the Jolt track is *simcade*, not *simulation*.
